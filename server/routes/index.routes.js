const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.json("Home Page");
});

module.exports = router;