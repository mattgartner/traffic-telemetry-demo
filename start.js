// const dotenv = require("dotenv");

// =========================================== //
// ===== Import Environmental Variables ====== //
// =========================================== //
// dotenv.load();

// =========================================== //
// ============ Start the Server ============= //
// =========================================== //
const app = require("./app");
app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () => {
  console.log(`✅  Express running → PORT ${server.address().port}`);
  console.log("Node Environment: ", process.env.NODE_ENV);
});
