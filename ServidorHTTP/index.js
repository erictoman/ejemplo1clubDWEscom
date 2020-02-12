const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const { router } = require("./Routes/router");
const cookieParser = require("cookie-parser");
//var cors = require("cors");
let app = express();
const port = 8081;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//app.use(cors());
//Manejo de cookies
app.use(cookieParser());

//Manejo de sesiones
app.use(
  session({
    secret: "ServerP",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

//app.use("/", express.static("www"));
app.use(router);

http.createServer(app).listen(port, () => {
  console.log("Listening..." + port);
});
