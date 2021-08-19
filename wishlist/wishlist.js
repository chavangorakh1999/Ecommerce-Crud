const express = require("express");
require("../mongoconnect");
const router=express.Router();
const Wishlist= require ('../models/Wishlist')

router.post("/SaveWishlist", (req, res) => {
    const wishData=req.body.Wish;
    const wish = new Wishlist({wishData})
    wish.save().then( () => {
        res.status(201).send("Wish Saved to Wishlist!");
    }).catch( (e) => {
        res.status(400).send(e);
    })
})

// Second API request, which is a GET request.
router.get("/", async(req, res) => {
    try {
        const Wishes = await Wishlist.find();
        res.send(Wishes);
    } catch(e) {
        res.send("Couldn't fetch your wishes :(");
    }
})

// Third API request, which is a PATCH request
router.patch("/UpdateWishlist/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const UpdateRequest = await Wishlist.findByIdAndUpdate(_id, req.body)
        // Returns the updated data
        res.send(UpdateRequest);
    } catch(e) {
        res.status(404).send("Couldn't update your wish :(");
    }
})

// Fourth API request, which is a DELETE request.
router.delete("/DeleteWishlist/:id", async(req, res) => {
    try{
        console.log(req.params.id)
        const DeleteRequest = await Wishlist.findByIdAndDelete(req.params.id);
        // Returns the deleted data
        res.send(DeleteRequest);
    } catch(e) {
        res.status(500).send("Couldn't delete your wish :(");
    }
})


module.exports = router;