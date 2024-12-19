const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menuItem");

// Create a new menu item
router.post("/", async (req, res) => {
  const newItem = new MenuItem(req.body);
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem); 
  } catch (err) {
    res.status(400).json({ error: err.message }); 
  }
});

// Get all menu items
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find(); 
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a menu item by ID
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const item = await MenuItem.findByIdAndDelete(id);
        res.status(200).json(item);
        } catch (err) {
            res.status(400).json({ error: err.message });
            }
            });

router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(400).json(err);
    }
});


// Get all brunch items (added missing API for brunch)
router.get("/brunch", async (req, res) => {
    try {
      const brunchItems = await MenuItem.find({ category: "BRUNCH" }); 
      res.status(200).json(brunchItems); 
    } catch (err) {
      res.status(500).json({ message: "Error fetching brunch items" });
    }
  });

module.exports = router;
