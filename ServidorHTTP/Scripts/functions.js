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

var estados = (req, res) => {
  var estadosArray = hd.getStates(req.query.pais);
  if (estadosArray !== undefined) {
    res.send(estadosArray);
  } else {
    res.send([]);
  }
};

var fechas = (req, res) => {
  var fechasFestivas = new Holidays(req.query.pais);
  console.log(req.query.pais);
  if (fechasFestivas !== undefined) {
    res.send(fechasFestivas.getHolidays());
  } else {
    res.send([]);
  }
};

module.exports = { festividades, noDefinida, paginainicio, estados, fechas };
