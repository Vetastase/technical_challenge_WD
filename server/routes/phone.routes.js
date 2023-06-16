const router = require("express").Router();
const mongoose = require("mongoose");
const data = require("../data/phones.json")
const Phone = require("../models/phone.model");

router.get("/phones", (req, res, next) => {
    res.json(data);
});

router.get("/phones/:id", (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "Not a valid ID!" });
        return;
    }

    Phone.findById(id)
    .then(data => res.status(200).json(data))
    .catch(error => res.json(error));
});

module.exports = router