const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const apiCallController = require("../controllers/apiCallController");

// ====================================== //
// ============ Home Routes ============= //
// ====================================== //
// for logged out and/or unregistered users
router.get("/", homeController.homepage);
router.get("/chicago", apiCallController.chicago);
router.get("/streaming", apiCallController.streaming);
router.get("/denver-report", homeController.denverreport);
router.get("/chicago-report", homeController.chicagoreport);
// router.get("/call2", apiCallController.call2);
// router.get("/call3", apiCallController.call3);

router.get("*", homeController.notfound);

module.exports = router;