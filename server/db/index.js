const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/server";

mongoose
.connect(MONGO_URI)
.then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connection to Mongo successfull! Database name: "${dbName}"`);
})
.catch((err) => {
    console.error("Error connection to mongo ", err);
});