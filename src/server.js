import express from "express"
import http from "http";
import WebSocket from "ws";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("home"));
const handleListen = () => console.log("Listening on http://127.0.0.1:3000/");

const server = http.createServer(app);
const wss = new WebSocket.Server({ server })
// starting http, webSocket in the same server 
// access to http server , create webSocket server on top of http server
// localhost:3000 can handle http & web request on the same port 

server.listen(3000, handleListen);


