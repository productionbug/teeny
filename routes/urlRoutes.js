const express = require("express");

const urlController = require("../controller/urlController");

const router = express.Router();

router.get("/", urlController.getHomepage);

// router.get("/teeny/:shorturl", () => {});

router.post("/teeny", urlController.postTeeny);

module.exports = router;
