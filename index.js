require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const cors = require('cors');
const { accountsRouter, tweetRouter } = require('./routers');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send('API is up and running')
});

//* ROUTES
app.use('/tweet', tweetRouter)
app.use("/account", accountsRouter)


app.listen(PORT, () => {
    console.log('server listening on port', PORT);
});