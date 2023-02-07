const fs = require("fs");
const { authJWTtoken } = require("../middlewares/auth");

const postDatosLogin = (req, res) => {
  const { body } = req;
  try {
    const user = JSON.parse(fs.readFileSync("./user.json", "utf8"));
    console.log(user);
    const userLogged = user.find(
      (user) =>
        user.username === body.username && user.password === body.password
    );
    if (!userLogged)
      return res.status(400).json({
        msgError: "credenciales incorrectas",
      });
    const token = authJWTtoken(userLogged);
    res.status(201).json({
      msg: "Session iniciada con exito",
      token,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      msgError: "Problemas en el servidor",
    });
  }
};

module.exports = {
  postDatosLogin,
};
