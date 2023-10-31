const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const catRouter = require("./routes/categories");

dotenv.config();
app.use(express.json());
main().then(console.log("Connected to Mongo")).catch(err => console.log(err));

async function main ()
{
    await mongoose.connect(process.env.MONGO_URL);
    // useCreateIndex: true;
}

const storage = multer.diskStorage({
    destination: (req, file, cb) =>
    {
        cb(null, "images");
    }, filename: (req, file, cb) =>
    {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) =>
{
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", catRouter);

app.listen("5000", () =>
{
    console.log("Server is running on port 5000");
});