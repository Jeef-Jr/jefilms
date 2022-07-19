const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.post("/add", movieController.addMovie);
router.get("/listar", movieController.listarMovie);
router.get("/listar/:idMovie", movieController.listarOneMovie);
module.exports = router;
