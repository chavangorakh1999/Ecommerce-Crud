const mongoose = require("mongoose")

const WishListSchema = new mongoose.Schema({
    wish : String
})

const Wishlist = new mongoose.model('Wishlist', WishListSchema);

module.exports = Wishlist