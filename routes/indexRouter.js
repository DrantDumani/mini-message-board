const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const validation = require("../middleware/validation");

/* GET home page. */
router.get("/", indexController.getIndex);

// Get new message form
router.get("/new", indexController.getNew);

// Post new message
router.post("/new", validation.validateInput, indexController.createPost);

module.exports = router;
