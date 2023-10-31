const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");


dotenv.config();
app.use(express.json());
main().then(console.log("Connected to Mongo")).catch(err => console.log(err));

async function main ()
{
    await mongoose.connect(process.env.MONGO_URL);
    // useCreateIndex: true;
}

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen("5000", () =>
{
    console.log("Server is running on port 5000");
});