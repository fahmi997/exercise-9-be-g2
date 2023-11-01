const { tweets } = require('../models');

module.exports = {
    getTweet: async (req, res) => {
        try {
            const result = await tweets.findAll({
                attributes: ['id', 'user_id', 'tweet', 'img_url', 'createdAt']
            });
            return res.status(200).send(result);

        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
        }
    },
    createTweet: async (req, res) => {
        try {
            if(req.body.tweet.length >= 150) {
                throw{
                    rc:400,
                    success: false,
                    message: "Tweet must be less than 150 characters"
                }
            }else {
                const result = await tweets.create(req.body);
                return res.status(200).send(result);
            }
        } catch (error) {
            console.log(error);
            return res.status(error.rc || 500).send(error)
        }
    },
    editTweet: async (req, res) => {
        try {
            await tweets.update(req.body, { where: { id: req.params.id} });
            return res.status(200).send({
                success: true,
                message: "Tweet updated successfully"
            });
        } catch (error) {
            console.log(error);
            return res.status(error.rc || 500).send(error)
        }
    },
    deleteTweet: async (req, res) => {
        try {
            await tweets.destroy({ where: { id: req.params.id } });
            return res.status(200).send({
                success: true,
                message: "Tweet deleted successfully"
            });
        } catch (error) {
            console.log(error);
            return res.status(error.rc || 500).send(error)
        }
    }
};