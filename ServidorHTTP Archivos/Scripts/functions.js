var saveFileBytes = require("../Scripts/saveFile");

var noDefinida = (req, res) => {
  res.send("No encontrado", 404);
};

var paginainicio = (req, res) => {
  res.send("Pagina de inicio");
};

var subirArchivo = (req, res) => {
  saveFileBytes(req);
};

module.exports = {
  noDefinida,
  paginainicio,
  subirArchivo
};
