package server;

import java.sql.*;
import javax.net.ssl.HttpsURLConnection;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import java.net.InetSocketAddress;
import java.io.OutputStream;
import java.io.IOException;

public class Server {
    private static HttpServer server;
    private static Connection dbConn;
    private static Object terminationLock = new Object();
    private static boolean terminated;

    public static void main( String[] args ) throws Exception   {
        // CONNECT POSTGRES DB
        Class.forName("org.postgresql.Driver");
        dbConn = DriverManager.getConnection(
            // jdbc:postgresql://host/database OR jdbc:postgresql:database
            "jdbc:postgresql://localhost/kyrix",
            "kyrix_user",
            "kyrix_password"
        );
        System.out.println("Connected to kyrix database successfully");

        // CREATE LEVELS OF DETAIL

        // START SERVER
        server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/", new IndexHandler());
        server.createContext("/first", new FirstRequestHandler());
        server.start();
        System.out.println("Backend server started at http://localhost:8000");
        terminated = false;

        // WAIT FOR TERMINATION
        synchronized(terminationLock) {
            while(!terminated) terminationLock.wait();
        }
        if (server != null)    server.stop(0);
        server = null;
    }

    public static void sendResponse(HttpExchange httpExchange, int responseCode, byte[] response, int len) throws IOException {
        // write response
        httpExchange.sendResponseHeaders(responseCode, len);
        OutputStream os = httpExchange.getResponseBody();
        os.write(response, 0, len);
        os.close();
        httpExchange.close();
    }

    // send response with additional contentType information
    public static void sendResponse(
            HttpExchange httpExchange,
            int responseCode,
            byte[] response,
            int len,
            String contentType)
            throws IOException {

        // add content type to response header
        httpExchange.getResponseHeaders().add("Content-Type", contentType);
        sendResponse(httpExchange, responseCode, response, len);
    }

    // send response using string
    public static void sendResponse(HttpExchange httpExchange, int responseCode, String response)
            throws IOException {

        // https://stackoverflow.com/questions/35313180/cors-with-com-sun-net-httpserver
        httpExchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        if (httpExchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
            httpExchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, OPTIONS");
            httpExchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type,Authorization");
            httpExchange.sendResponseHeaders(HttpsURLConnection.HTTP_NO_CONTENT, -1);
            return;
        }
        httpExchange.getResponseHeaders().add("Content-Type", "text/plain");
        sendResponse(httpExchange, responseCode, response.getBytes(), response.getBytes().length);
    }
}
