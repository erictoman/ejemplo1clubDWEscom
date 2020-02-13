const express = require("express");
const functions = require(`../Scripts/functions`);
var router = express.Router();
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/api/Festividades/obtenerPaises", (req, res) => {
  functions.festividades(req, res);
});

router.get("/api/Festividades/obtenerEstados", (req, res) => {
  functions.estados(req, res);
});

router.get("/", (req, res) => {
  functions.paginainicio(req, res);
});

router.all("*", (req, res) => {
  functions.noDefinida(req, res);
});

module.exports = {
  router
};
