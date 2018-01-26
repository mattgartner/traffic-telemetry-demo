const mongoose = require("mongoose");
// const List = mongoose.model("List");

exports.homepage = async(req, res) => {
  res.render("home", {
    title: "Home"
  });
};

exports.test = (req, res) => {
  res.render("test", {
    title: "Test"
  });
};

exports.envtest = (req, res) => {
  const env = process.env.TEST_ENV;

  res.send(env);
};

exports.notfound = (req, res) => {
  res.render("error", {
    title: "Error - 404"
  });
};
