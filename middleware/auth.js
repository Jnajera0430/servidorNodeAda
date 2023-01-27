const jwt = require("jsonwebtoken");

const authPost = (req, res, next) => {
  const { body } = req;

  if (Object.keys(body).length < 2)
    return res.status(400).json({
      msg: " datos invalidos",
    });
  next();
};
const authPostValid = (req, res, next) => {
  const { body, method } = req;
  if (method == "POST") {
    if (Object.keys(body).length === 0)
      return res.status(400).json({
        msg: " datos invalidos",
      });
    next();
  }
  next();
};

const requestValid = () => {
  const { method } = req;
  const arrMethod = ["POST", "GET", "PUT", "DELETE"];
  const valid = arrMethod.some((http) => http === method);
  if (!valid)
    return res.status(400).json({
      msg: "Metodo http invalido",
    });

  next();
};

const validUrl = (req, res, next) => {
  let url = req.originalUrl;
  const arrayUrl = url.split("/");
  const valid = arrayUrl.some((url) => url == "app");
  console.log(valid);
  const urlValidated = ["app", "/"];
  const validate = urlValidated.some((value) => value === url);
  console.log(validate);
  if (!valid) {
    return res.status(401).json({
      msg: "no tenés autorizacion",
    });
  }
  if (arrayUrl.length === 2) {
    if (arrayUrl[2] === "")
      return res.status(401).json({
        msg: "no tenés autorizacion",
      });
    next();
  }
  next();
};

const authIdioma = (req, res, next) => {
  const { idioma } = req.params;
  const { body } = req;
  if (idioma != "es" && idioma != "en")
    return res.status(400).json({
      msg: "parametros invalidos",
    });
  if (Object.keys(body).length === 0)
    return res.status(400).json({
      msg: "datos invalidos",
    });
  next();
};

const authLimit = (req, res, next) => {
  const { num } = req.params;
  if (num > 10)
    return res.status(400).json({
      msg: "Limite de conteo excedido tiene la posibilidad de obtener el conteo hasta 10.",
    });
  if (num == 0)
    return res.status(400).json({
      msg: "Limite tiene que ser mayor a cero.",
    });
  next();
};

const authPostJWT = (req, res, next) => {
  const token = jwt.sign({ msg: "este" }, "palabrasercreta", {
    algorithm: "HS256",
    expiresIn: 1,
  });
  req.token = token;
  console.log(token);
  setTimeout(() => {
    next();
  }, 8000);
};
const authDecodeJWT = (req, res, next) => {
  try {
    const decode = jwt.verify(req.token, "palabrasercreta");
    req.decode = decode;
    console.log(decode);
    next();
  } catch (error) {
    res.json({ error });
  }
};

module.exports = {
  authPost,
  authIdioma,
  authLimit,
  validUrl,
  authPostJWT,
  authDecodeJWT,
  authPostValid,
  requestValid
};
