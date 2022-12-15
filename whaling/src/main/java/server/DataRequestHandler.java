package server;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import javax.net.ssl.HttpsURLConnection;
import java.sql.*;

/** Created by wenbo on 1/8/18. */
public class DataRequestHandler implements HttpHandler {

    private final Gson gson;
    private Connection dbConn;

    public DataRequestHandler(Connection dbConn) {

        gson = new GsonBuilder().create();
        this.dbConn = dbConn;
    }

    @Override
    public void handle(HttpExchange httpExchange) throws IOException {

        System.out.println("Serving /data");

        try {
            // check if this is a POST request
            if (!httpExchange.getRequestMethod().equalsIgnoreCase("POST")) {
                Server.sendResponse(httpExchange, HttpsURLConnection.HTTP_BAD_METHOD, "");
                return;
            }

            // get data of the current request
            InputStream istr = httpExchange.getRequestBody();
            BufferedReader br = new BufferedReader(new InputStreamReader(istr, "utf-8"));
            StringBuilder sbr = new StringBuilder();
            int c = 0;
            while ((c = br.read()) != -1) {
                sbr.append((char)c);
            }

            String jsonString = sbr.toString();
            Map params = gson.fromJson(jsonString, Map.class);

            // construct query
            String query = "";
            Double dbegin = (Double)params.get("begin");
            Double dend = (Double)params.get("end");
            int begin = dbegin.intValue();
            int end = dend.intValue();
            switch (params.get("lod").toString()) {
                case "ocean":
                    query = "SELECT ocean, COUNT(*) AS count, AVG(_lon) AS lon, AVG(_lat) AS lat, MAX(date)-MIN(date)+1 AS time_spent, MAX(expedition_nationality) AS nat FROM whale_nodes";
                    
                    if (!params.get("species").toString().equals("All")) {
                        query += " WHERE whale_species = '" + params.get("species").toString() + "'";
                    
                        if (begin != 1850 || end != 2020)
                            query += " AND '[" + begin + "-01-01, " + end + "-01-01]'::daterange @> DATE";
                    }
                    else if (begin != 1850 || end != 2020) {
                        query += " WHERE '[" + begin + "-01-01, " + end + "-01-01]'::daterange @> DATE";
                    }

                    query += " GROUP BY ocean ORDER BY count ASC;";
                    break;
                case "area":
                    query = "SELECT area, COUNT(*) AS count, AVG(_lon) AS lon, AVG(_lat) AS lat, MAX(date)-MIN(date)+1 AS time_spent, MAX(expedition_nationality) AS nat FROM whale_nodes";
                    
                    if (!params.get("species").toString().equals("All")) {
                        query += " WHERE whale_species = '" + params.get("species").toString() + "'";
                    
                        if (begin != 1850 || end != 2020)
                            query += " AND '[" + begin + "-01-01, " + end + "-01-01]'::daterange @> DATE";
                    }
                    else if (begin != 1850 || end != 2020) {
                        query += " WHERE '[" + begin + "-01-01, " + end + "-01-01]'::daterange @> DATE";
                    }

                    query += " GROUP BY area ORDER BY count ASC;";
                    break;
                case "grid":
                case "heatmap":
                    query = "SELECT COUNT(*) AS count, _lon::INT AS lon, _lat::INT AS lat, MAX(date)-MIN(date)+1 AS time_spent, MAX(expedition_nationality) AS nat FROM whale_nodes";
                    
                    if (!params.get("species").toString().equals("All")) {
                        query += " WHERE whale_species = '" + params.get("species").toString() + "'";
                    
                        if (begin != 1850 || end != 2020)
                            query += " AND '[" + begin + "-01-01, " + end + "-01-01]'::daterange @> DATE";
                    }
                    else if (begin != 1850 || end != 2020) {
                        query += " WHERE '[" + begin + "-01-01, " + end + "-01-01]'::daterange @> DATE";
                    }
                    
                    query += " GROUP BY lat, lon ORDER BY count ASC;";
                    break;
                case "raw":
                    query = "SELECT COUNT(*) AS count, _lon AS lon, _lat AS lat, MAX(date)-MIN(date)+1 AS time_spent, expedition_nationality AS nat FROM whale_nodes";
                    
                    if (!params.get("species").toString().equals("All")) {
                        query += " WHERE whale_species = '" + params.get("species").toString() + "'";
                    
                        if (begin != 1850 || end != 2020)
                            query += " AND '[" + begin + "-01-01, " + end + "-01-01]'::daterange @> DATE";
                    }
                    else if (begin != 1850 || end != 2020) {
                        query += " WHERE '[" + begin + "-01-01, " + end + "-01-01]'::daterange @> DATE";
                    }

                    query += " GROUP BY lat, lon ORDER BY count ASC;";
                    break;
            }
            System.out.println(query);
            Statement stmt = this.dbConn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            ResultSet rs = stmt.executeQuery(query);

            // construct the response object
            ArrayList<HashMap<String, Object>> responseList = new ArrayList();
            while (rs.next()) {
            HashMap<String, Object> rowDict = new HashMap();

                switch (params.get("lod").toString()) {
                    case "ocean":
                        rowDict.put("ocean", rs.getString(1));
                        rowDict.put("count", rs.getInt(2));
                        rowDict.put("lon", rs.getFloat(3));
                        rowDict.put("lat", rs.getFloat(4));
                        rowDict.put("time_spent", rs.getInt(5));
                        rowDict.put("nationality", rs.getString(6));
                        break;
                    case "area":
                        rowDict.put("area", rs.getString(1));
                        rowDict.put("count", rs.getInt(2));
                        rowDict.put("lon", rs.getFloat(3));
                        rowDict.put("lat", rs.getFloat(4));
                        rowDict.put("time_spent", rs.getInt(5));
                        rowDict.put("nationality", rs.getString(6));
                        break;
                    default:
                        rowDict.put("count", rs.getInt(1));
                        rowDict.put("lon", rs.getFloat(2));
                        rowDict.put("lat", rs.getFloat(3));
                        rowDict.put("time_spent", rs.getInt(4));
                        rowDict.put("nationality", rs.getString(5));
                        break;
                }

                responseList.add(rowDict);
            }
            String response = gson.toJson(responseList);

            // send the response back
            Server.sendResponse(httpExchange, HttpsURLConnection.HTTP_OK, response);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
    }
}