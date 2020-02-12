var Holidays = require("date-holidays");
var hd = new Holidays();
var festividades = (req, res) => {
  res.send(hd.getCountries());
};

var noDefinida = (req, res) => {
  res.send("No encontrado", 404);
};

var paginainicio = (req, res) => {
  res.send("Pagina de inicio");
};

module.exports = { festividades, noDefinida, paginainicio };
