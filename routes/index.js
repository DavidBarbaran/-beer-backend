var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var user = mongoose.model('user');
var drink = mongoose.model('drink');

router.route('/user')
    .get(function (req, res) {

        // User.findOne({ nameFirst: 'John' });     // returns first user named John
        //  res.send('user' + id);    
        
        user.find(function (err, resultado) {
            if (err) {
                res.status(500).json({ mensaje: 'Failed GET users' });
            }
            else {
                res.status(200).json(resultado);
            }
        });
        
    })
    .post(function (req, res) {
        var myUser = new user();
        myUser.name = req.body.name;
        myUser.lastname = req.body.lastname;
        myUser.urlImage = req.body.urlImage;
        myUser.email = req.body.email;
        myUser.birthdate = req.body.birthdate;
        myUser.question = req.body.question;
        myUser.password = req.body.password;

        myUser.save(function (err, resultado) {
            if (err) {
                res.status(500)
                    .json({ mensaje: 'Register user failed' })
            }
            else {
                res.status(200)
                    .json({ mensaje: 'Register user successful' });
            }
        });

    });

    router.route('/drink/:category')
    .get(function (req, res) {

        let category = req.params.category;
        console.log('CATEGORY successful ->' + category);

        drink.find({category:category},function (err, resultado) {
            if (err) {
                res.status(500).json({ mensaje: 'Failed GET drinks' });
            }
            else {
                res.status(200).json(resultado);
            }
        });
    })
    .post(function (req, res) {
        var myDrink = new drink();
        myDrink.category = req.body.category;
        myDrink.description = req.body.description;
        myDrink.image = req.body.image;
        myDrink.isOffer = req.body.isOffer;
        myDrink.name = req.body.name;
        myDrink.offer = req.body.offer;
        myDrink.price = req.body.price;

        myDrink.save(function (err, resultado) {
            if (err) {
                res.status(500)
                    .json({ mensaje: 'Register drink failed' })
            }
            else {
                res.status(200)
                    .json({ mensaje: 'Register drink successful' });
            }
        });

    });
module.exports = router;