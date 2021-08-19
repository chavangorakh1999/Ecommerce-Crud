const express = require("express");
// require("../mongoconnect");
const router = express.Router();
const Item = require("../models/Item");

router.post("/SaveItem", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const item = new Item({ name, price });

  item
    .save()
    .then(() => {
      res.status(201).send("Item Saved to ItemsList!");
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

// Second API request, which is a GET request.
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (e) {
    res.send("Couldn't fetch your items :(");
  }
});

// Third API request, which is a PATCH request
router.patch("/UpdateItem/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const UpdateRequest = await Item.findByIdAndUpdate(_id, req.body);
    // Returns the updated data
    res.send(UpdateRequest);
  } catch (e) {
    res.status(404).send("Couldn't update your item :(");
  }
});

// Fourth API request, which is a DELETE request.
router.delete("/DeleteItem/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const DeleteRequest = await Item.findByIdAndDelete(req.params.id);
    // Returns the deleted data
    res.send(DeleteRequest);
  } catch (e) {
    res.status(500).send("Couldn't delete your item :(");
  }
});

module.exports = router;
