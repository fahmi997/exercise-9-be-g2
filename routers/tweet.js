const { tweetController } = require("../controllers")

const router = require("express").Router();

router.get("/", tweetController.getTweet);

router.post("/", tweetController.createTweet);
router.patch("/:id", tweetController.editTweet);
router.delete("/:id", tweetController.deleteTweet);

module.exports = router;