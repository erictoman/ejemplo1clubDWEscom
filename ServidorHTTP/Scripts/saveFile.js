const fs = require("fs");
var createNewFileTextOld = (ruta, text) => {
  fs.open(ruta, "w+", (err, fd) => {
    fs.write(fd, new Buffer.from(text), err => {
      if (err) {
        console.log(err);
      } else {
        console.log(ruta);
      }
    });
  });
};

var createNewFileTextNew = (ruta, text) => {
  var archivo = fs.openSync(ruta, "w+");
  fs.writeFileSync(archivo, new Buffer.from(text));
  console.log(ruta);
};

var saveFileAllin = (ruta, text) => {
  fs.writeFile(ruta, text, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(ruta);
    }
  });
};

var saveFileAllinNew = (ruta, text) => {
  fs.writeFileSync(ruta, text);
  console.log(ruta);
};

//createNewFileTextOld("/home/eric/mango.txt");
//saveFileAllinNew("/home/eric/mango.txt");
module.exports = {
  createNewFileTextOld,
  createNewFileTextNew,
  saveFileAllin,
  saveFileAllinNew
};
