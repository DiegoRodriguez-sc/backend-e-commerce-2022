const { Router } = require("express");
const { check } = require("express-validator");
const {
  postCategories,
  putCategories,
  deleteCategories,
  getCategories,
} = require("../controller/categories.controller");

const { idCategorieExists } = require("../helpers/db_validators");
const { validateData } = require("../middlewares/validateData");
const { validateJwt } = require("../middlewares/validateJwt");
const { validateRol } = require("../middlewares/validateRol");

const router = Router();

router.get("/", getCategories);

router.post(
  "/",
  [
    validateJwt,
    validateRol,
    check("name", "El nombre es obligatorio").not().isEmpty(),
    validateData,
  ],
  postCategories
);

router.put(
  "/:id",
  [
    validateJwt,
    validateRol,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(idCategorieExists),
    validateData,
  ],
  putCategories
);

router.delete(
  "/:id",
  [
    validateJwt,
    validateRol,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(idCategorieExists),
    validateData,
  ],
  deleteCategories
);

module.exports = router;
