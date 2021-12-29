const express = require("express");
const { showProfiles, addProfile, showPausedProfiles, deleteProfile, changeStatus } = require("../controllers/profile");
const router = express.Router();

router.get("/profiles", showProfiles);
router.get("/profiles/pause", showPausedProfiles);
router.post("/profiles", addProfile);
router.delete("/profiles/:id", deleteProfile);
router.patch('/profiles/:id', changeStatus);
module.exports = router;
