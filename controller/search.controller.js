const { request, response } = require("express");
const { ObjectId } = require("mongoose").Types;
const Categorie = require("../models/categorie");
const Product = require("../models/product");

const coleccionesPermitidas = ["categories", "products"];

const getProductsByName = async (termino = "", res = response) => {
  const regex = new RegExp(termino, "i");
  const products = await Product.find({ name: regex, state: true }).populate(
    "category",
    "name"
  );

  res.status(200).json({
    results: products,
  });
};

const getProductsByCat = async (termino = "", res = response) => {
  const esMongoID = ObjectId.isValid(termino);

  if (esMongoID) {
    const products = await Product.find({ category: ObjectId(termino), state: true }).populate(
      "category",
      "name"
    );

    return res.status(200).json({
       results:products
    });
  }else{
    return res.status(400).json({
      msg:"La categoria no existe"
    })
  }
};

const search = (req, res = response) => {
  const { coleccion, termino } = req.params;

  if (!coleccionesPermitidas.includes(coleccion)) {
    return res.status(400).json({
      msg: `Las colecciones permitidas son: ${coleccionesPermitidas}`,
    });
  }

  switch (coleccion) {
    case "categories":
      getProductsByCat(termino, res);
      break;
    case "products":
      getProductsByName(termino, res);
      break;

    default:
      res.status(500).json({
        msg: "Se le olvido hacer esta búsqueda",
      });
  }
};

module.exports = {
  search,
};
