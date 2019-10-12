const router = require('express').Router();
//const models = require("../models");

router.get("/api", (req, res) => {

    res.send('Welcome to my API');
});





module.exports = router;