const Listing = require("../models/Listing");

exports.getListings = async (req, res) => {
  const listings = await Listing.find().populate("user", "name email");
  res.json(listings);
};

exports.createListing = async (req, res) => {
  const { title, description, price, image } = req.body;
  const listing = await Listing.create({
    title,
    description,
    price,
    image,
    user: req.user._id
  });
  res.status(201).json(listing);
};
