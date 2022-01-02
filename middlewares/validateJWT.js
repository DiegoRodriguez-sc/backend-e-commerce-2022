const { response } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validateJwt = async(req, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const user = await User.findById(uid);

    if (!user) {
      return res.status(401).json({
        msg: "Usuario no encontrado",
      });
    }
    
    if (!user.state) {
      return res.status(401).json({
        msg: "Token no válido ",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido",
    });
  }
};
module.exports = {
  validateJwt,
};