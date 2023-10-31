const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");



//CREATE POST
router.post("/register", async (req, res) =>
{
    const newPost = new Post(req.body);
    try
    {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err)
    {
        res.status(500).json(err);
    }
});

//UPDATE POST
router.put("/:id", async (req, res) =>
{
    try
    {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username)
        {
            try
            {
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        set: req.body,
                    },
                    { new: true });
                res.status(200).json(updatePost);
            } catch (err)
            {
                res.status(500).json(err);
            }
        } else { res.status(401).json(" You can update only your Post"); }

    } catch (err)
    {
        res.status(500).json(err);
    }
});


module.exports = router;

//DELETE POST
router.delete("/:id", async (req, res) =>
{
    if (req.body.userId === req.params.id)
    {
        try
        {
            const user = await User.findById(req.params.id);
            const { password, ...others } = user._doc;
            try
            {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been delete");
            } catch (err)
            {
                res.status(500).json(err);
            }
        } catch (err) { response.status(404).json("User not found!"); }
    } else
    {
        response.status(401).json("you can delete only your account!");
    }
});


//GET USER
router.get("/:id", async (req, res) =>
{
    try
    {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);

    } catch (err)
    {
        res.status(500).json(err);
    }
});