const jwt = require("jsonwebtoken");
const authJWTtoken = (dato) => {
  const token = jwt.sign(dato, process.env.SECRET_KEY);
  return token;
};

const authDecodeToken = (req, res, next) => {
  const { token } = req.headers;
  try {
    jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
      if (err)
        return res.status(401).json({
          msgError: "Sin autorizacion",
        });
      req.decode = data;
      next();
    });
  } catch (error) {
    console.log({ error });
    return res.status(401).json({
      msgError: "Sin autorizacion",
    });
  }
};

module.exports = {
  authJWTtoken,
  authDecodeToken,
};
