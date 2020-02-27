const express = require("express");
const functions = require(`../Scripts/functions`);
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  functions.paginainicio(req, res);
});
router.post("/SubirArchivos", (req, res) => {
  functions.subirArchivo(req, res);
});

router.all("*", (req, res) => {
  functions.noDefinida(req, res);
});

module.exports = {
  router
};
