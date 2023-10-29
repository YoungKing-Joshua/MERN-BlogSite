const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");


dotenv.config();
app.use(express.json());
main().then(console.log("Connected to Mongo")).catch(err => console.log(err));

async function main ()
{
    await mongoose.connect(process.env.MONGO_URL);
    // useCreateIndex: true;
}

app.use("/api/auth", authRouter)

app.listen("5000", () =>
{
    console.log("Server is running on port 5000");
});