const router = require('express').Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.burger.findAll({})
        .then(function(result) {

            res.render("index", {
                burgers: result
            });

        }).catch(err => {
            res.status(500)
            throw err
        });
});


module.exports = router;