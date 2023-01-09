const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DBと接続中")
}).catch((err) => {
    console.log("Mongooseのエラーです")
    console.log(err)
});