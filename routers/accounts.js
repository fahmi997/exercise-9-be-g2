const router = require("express").Router()
const { accountsController } = require("../controllers")
router.post("/register", accountsController.create)

module.exports = router