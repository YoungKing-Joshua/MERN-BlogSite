const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

//REGISTER
router.put("/:id", async (req, res) =>
{
    if (req.body.userId === req.params.id)
    {
        if (req.body.password == req.params.id)
        {
            const salt = await (bcrypt.genSalt(10));
            req.body.password = await bcrypt.hash(req.body.password.salt);
        }
        try
        {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json(updateUser)
        } catch (err)
        {

        }
    } else
    {
        response.status(401).json("you can  update only your account!");
    }
});


module.exports = router;
