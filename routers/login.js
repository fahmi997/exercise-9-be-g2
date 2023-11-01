const router = require("express").Router();
const { loginController } = require("../controllers");

router.get("/", loginController.getData);

module.exports = router;