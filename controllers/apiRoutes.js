const router = require('express').Router();
const db = require("../models");

// Add new Burger to be devour

router.post("/add", (req, res) => {

    console.log(req.body);

    db.burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then((dbNburger) => {
        res.json(dbNburger);
        console.log(dbNburger);
    }).catch((err) => {
        res.json(err);
    });
});



// Update Devoured Burger
router.put("/devour", (req, res) => {

    const burgerId = req.body.id;

    db.burger.update({
            devoured: true
        }, {
            where: {
                id: burgerId
            }
        }).then(function(dbBurger) {

            res.json(dbBurger);
        })
        .catch(function(err) {

            res.json(err);
        });
});

// Delete a Burger

router.delete("/burger/:id", function(req, res) {

    console.log(req.params);

    db.burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger) {
        res.json(dbBurger);
    });

});



module.exports = router;