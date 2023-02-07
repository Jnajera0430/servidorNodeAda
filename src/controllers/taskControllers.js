const fs = require("fs");

const getTaskAll = (req, res) => {
  const { decode } = req;
  try {
    if (decode.rol !== "admin")
      return res.status(401).json({
        msgError: "Sin autorizacion",
      });
    const task = JSON.parse(fs.readFileSync("./tarea.json", "utf-8"));
    res.status(200).json({
      msg: "datos obtenidos con exito",
      task,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      msgError: "Problemas en el servidor",
    });
  }
};

const getTaskUser = (req, res) => {
  const { decode } = req;
  try {
    console.log(decode.rol); 
    if (decode.rol !== "user" && decode.rol !== "admin")
      return res.status(401).json({
        msgError: "Sin autorizacion",
      });
    const task = JSON.parse(fs.readFileSync("./tarea.json", "utf-8"));

    const datos = task.filter((value) => decode.username == value.idUser);
    res.status(200).json({
      msg: "datos obtenidos con exito",
      datos,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      msgError: "Problemas en el servidor",
    });
  }
};

module.exports = {
  getTaskAll,
  getTaskUser,
};
