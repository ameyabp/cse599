package server;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import javax.net.ssl.HttpsURLConnection;
import java.io.FileInputStream;
import java.io.IOException;

/** Created by wenbo on 1/2/18. */
public class IndexHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange httpExchange) throws IOException {

        // System.out.println("Serving /");

        try {
            // System.out.println(httpExchange.getRequestURI().getPath());

            // check if it is GET request
            if (!httpExchange.getRequestMethod().equalsIgnoreCase("GET")) {
                Server.sendResponse(httpExchange, HttpsURLConnection.HTTP_BAD_METHOD, "");
                return;
            }

            String path = httpExchange.getRequestURI().getPath();
            if (path.contains("favicon.ico")) {
                Server.sendResponse(httpExchange, HttpsURLConnection.HTTP_BAD_REQUEST, "");
                return;
            }
            if (path.equals("/")) path = "/index.html";
            System.out.println("Serving front-end" + path);

            // read the frontend file and return
            FileInputStream fs = new FileInputStream("../front-end" + path);
            final byte[] content = new byte[0x1000000];
            int len = fs.read(content);

            // send back a ok response
            if (path.contains(".svg")) // todo: better file checking for the index handler
            Server.sendResponse(
                        httpExchange, HttpsURLConnection.HTTP_OK, content, len, "image/svg+xml");
            else if (path.contains(".png"))
                Server.sendResponse(
                        httpExchange, HttpsURLConnection.HTTP_OK, content, len, "image/png");
            else if (path.contains(".jpg"))
                Server.sendResponse(
                        httpExchange, HttpsURLConnection.HTTP_OK, content, len, "image/jpg");
            else if (path.contains(".js"))
                Server.sendResponse(
                        httpExchange,
                        HttpsURLConnection.HTTP_OK,
                        content,
                        len,
                        "application/javascript");
            else Server.sendResponse(httpExchange, HttpsURLConnection.HTTP_OK, content, len);

        } 
        catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
            Server.sendResponse(httpExchange, HttpsURLConnection.HTTP_NO_CONTENT, "");
        }
    }
}
