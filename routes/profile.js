const express = require("express");
const { showProfiles, addProfile, showPausedProfiles, deleteProfile, changeStatus } = require("../controllers/profile");
const router = express.Router();

router.get("/profiles", showProfiles);
router.get("/pausedProfiles", showPausedProfiles);
router.post("/addProfile", addProfile);
router.delete("/deleteProfile/:id", deleteProfile);
router.post('/changeStatus/:id', changeStatus);
module.exports = router;
