const { Router } = require("express");
const { check } = require("express-validator");
const { search } = require("../controller/search.controller");


const router = Router();

//public
router.get("/:coleccion/:termino", search);


module.exports = router;
