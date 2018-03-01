exports.homepage = async(req, res) => {
  res.send("Hello World.");
};

exports.denverreport = async(req, res) => {
  res.render("denver-report");
};
exports.chicagoreport = async(req, res) => {
  res.render("chicago-report");
};

exports.notfound = (req, res) => {
  res.status(404).send('Sorry, we cannot find that!');
};
