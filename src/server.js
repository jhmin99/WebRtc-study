import express from "express"


const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("home"));
const handleListen = () => console.log("Listening on http://127.0.0.1:3000/");

app.listen(3000, handleListen)