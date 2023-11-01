const router = require("express").Router();
const { profileController } = require("../controllers");

router.get("/", profileController.searchProfile);
router.patch("/", profileController.updateProfile)

module.exports = router;