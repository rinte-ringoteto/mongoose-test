const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.listen(process.env.PORT || 5001, () => {
    console.log(`App started on port ${PORT}`);
});

const mongoose = require("mongoose");
require('dotenv').config();

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    sslValidate: false,
}).then(() => {
    console.log("DBと接続中")
}).catch((err) => {
    console.log("Mongooseのエラーです")
    console.log(err)
});