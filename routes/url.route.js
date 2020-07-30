const express = require("express");

const urlController = require("../controller/url.controller");

const router = express.Router();

router.get("/", urlController.getHomepage);

router.get("/:shorturl", urlController.getLongUrl);

router.post("/teeny", urlController.postTeeny);

module.exports = router;
