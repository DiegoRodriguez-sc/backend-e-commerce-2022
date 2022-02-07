const { Router } = require("express");
const { check } = require("express-validator");
const { postOrder, getOrder } = require("../controller/orders.controller");
const { idOrderExists } = require("../helpers/db_validators");
const { validateData } = require("../middlewares/validateData");
const { validateJwt } = require("../middlewares/validateJwt");


const router = Router();

router.post("/", [
  validateJwt,
  check("amount","El monto es obligatorio").not().isEmpty(),
  validateData,
], postOrder);

router.get("/:id", [
  check("id", "No es un id de Mongo válido").isMongoId(),
  check("id").custom(idOrderExists),
  validateData,
], getOrder);

module.exports = router;