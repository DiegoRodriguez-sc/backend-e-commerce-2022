const { Router } = require("express");
const { check } = require("express-validator");
const { postOrder } = require("../controller/orders.controller");
const { validateData } = require("../middlewares/validateData");
const { validateJwt } = require("../middlewares/validateJwt");


const router = Router();

router.post("/", [
  validateJwt,
  check("amount","El monto es obligatorio").not().isEmpty(),
  validateData,
], postOrder);


module.exports = router;