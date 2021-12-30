const express = require("express");
const { showProfiles, addProfile, showPausedProfiles, deleteProfile, changeStatus } = require("../controllers/profile");
const router = express.Router();

router.route("/profiles")
.get(showProfiles)
.post( addProfile);

router.route("/profiles/:id")
.delete(deleteProfile)
.patch(changeStatus);

router.get("/profiles/pause", showPausedProfiles);

module.exports = router;
