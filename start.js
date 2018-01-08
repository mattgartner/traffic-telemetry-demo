const mongoose = require("mongoose");
const dotenv = require("dotenv");

// =========================================== //
// ===== Import Environmental Variables ====== //
// =========================================== //
dotenv.load();

// =========================================== //
// ============ Connect to DB ================ //
// =========================================== //
mongoose.connect(process.env.DATABASE_URL, {
  useMongoClient: true,
  autoReconnect: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => {
  console.error(`🙅🏻 🚫 🙅🏻 🚫 🙅🏻 🚫 ‍‍🙅🏻 🚫 🙅🏻 → ${err.message}`);
});

// =========================================== //
// ============ Import the models ============ //
// =========================================== //
require("./models/user");


// =========================================== //
// ============ Start the Server ============= //
// =========================================== //
const app = require("./app");
app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () => {
  console.log(`✅  Express running → PORT ${server.address().port}`);
  console.log("Node Environment: ", process.env.NODE_ENV);
});
