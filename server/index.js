const express = require("express");
const app = express();


app.use("/", (req, res) =>
{
    console.log("YoungKing");

});

app.listen("5000", () =>
{
    console.log("Server is running on port 5000");
});