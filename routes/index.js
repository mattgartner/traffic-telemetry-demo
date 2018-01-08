const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const {
  catchErrors
} = require("../handlers/errorHandlers");

// ====================================== //
// ============ Home Routes ============= //
// ====================================== //
// for logged out and/or unregistered users
router.get("/", homeController.homepage);

// for logged in users
// router.get("/home", authController.isLoggedIn, homeController.homepage);

router.get("*", homeController.notfound);

module.exports = router;