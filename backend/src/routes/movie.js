const express = require("express");
const router = express.Router();
const {
    queryMovie,
    getSingleMovie,
    postMovie,
    putMovie,
    deleteMovie,
} = require("../controllers/movie");

router.get("/", queryMovie);
router.get("/:id", getSingleMovie);
router.post("/", postMovie);
router.put("/:id", putMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
