const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

//End point to post the menu item data to the MongoDB
router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log("Menu data saved Successfully !");
        res.status(200).json(response);
    } catch (err) {
        console.log("Error in saving the data" + err);
        res.status(500).json({ error: "Internal server error" });
    }
});

//End point to fetch the menu data from the MongoDB
router.get("/", async (req, res) => {
    try {

        const data = await MenuItem.find();

        res.status(200).json(data);
        console.log("Data Fetched !");
    } catch (err) {
        console.log("Error in fetching the data" + err);
        res.status(500).json({ error: "Internal server error" });
    }
});

//End point to get the food based on taste
router.get("/:tasteType", async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        // console.log(req.params);

        // console.log(data)
        if (tasteType == "Sweet" || tasteType == "Spicy" || tasteType == "Mixed") {
            const response = await MenuItem.find({ taste: tasteType });
            res.status(200).json(response);
            console.log(`Food Fetched of type ${tasteType} !`);
        } else {
            res.status(400).json({ error: "Invalid Food type" });
        }
    } catch (err) {
        console.log("Error in fetching the data" + err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
