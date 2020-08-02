const express = require("express");

const errorController = require("../controller/404.controller");

const router = express.Router();

router.use(errorController);

module.exports = router;
