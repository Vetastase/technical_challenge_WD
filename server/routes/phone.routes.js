const router = require("express").Router();
const mongoose = require("mongoose");
const data = require("../data/phones.json")
const Phone = require("../models/phone.model");

router.get("/phones", (req, res, next) => {
    res.json(data);
});

router.get("/phones/:id", (req, res, next) => {
    const 
})