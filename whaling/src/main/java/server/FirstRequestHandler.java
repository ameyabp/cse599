package server;

import com.google.gson.*;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.IOException;
import javax.net.ssl.HttpsURLConnection;
import java.util.HashMap;
import java.util.Map;

/** Created by wenbo on 1/2/18. */
public class FirstRequestHandler implements HttpHandler {

    // gson builder
    private final Gson gson;

    public FirstRequestHandler() {
        gson = new GsonBuilder().create();
    }

    @Override
    public void handle(HttpExchange httpExchange) throws IOException {

        System.out.println("Serving first request");

        try {
            // check if this is a POST request
            if (!httpExchange.getRequestMethod().equalsIgnoreCase("POST")) {
                Server.sendResponse(httpExchange, HttpsURLConnection.HTTP_BAD_METHOD, "");
                return;
            }

            // get the first level of detail from the database
            

            // construct a response map
            Map<String, Object> respMap = new HashMap<>();
            respMap.put("data", "Hello World!");

            // convert the response to a json object and send it back
            String response = gson.toJson(respMap);
            Server.sendResponse(httpExchange, HttpsURLConnection.HTTP_OK, response);
        } 
        catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
    }
}
