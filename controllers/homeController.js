const mongoose = require("mongoose");
// const List = mongoose.model("List");

exports.homepage = async(req, res, next) => {
  res.render("home", {
    title: "Home"
  });
};

exports.notfound = (req, res) => {
  res.render("error", {
    title: "Error - 404"
  });
};
