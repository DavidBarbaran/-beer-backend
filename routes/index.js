var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var user = mongoose.model('user');
var drink = mongoose.model('drink');
var category = mongoose.model('category');

router.route('/user').get(function (req, res) {

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
}
)
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

router.route('/login').post(function (req, res) {
    let email = req.query.email;
    let password = req.query.password
    user.findOne({ email: email, password: password }, function (err, resultado) {
        console.log('RESPONSE successful ->' + resultado);
        if (err) {
            res.status(500).json({ mensaje: 'Error del servidor' });
        }
        else {
            if (resultado != null) {
                res.status(200).json(resultado);
            } else {
                res.status(401).json({ mensaje: 'Login failed' });
            }
        }
    });
});

router.route('/drink')
    .get(function (req, res) {
        let category = req.query.category;
        console.log('CATEGORY successful ->' + category);
        if (category != null) {
            drink.find({ category: category }, function (err, resultado) {
                if (err) {
                    res.status(500).json({ mensaje: 'Failed GET drinks' });
                }
                else {
                    res.status(200).json(resultado);
                }
            });
        } else {
            drink.find(function (err, resultado) {
                if (err) {
                    res.status(500).json({ mensaje: 'Failed GET drinks' });
                }
                else {
                    res.status(200).json(resultado);
                }
            });
        }

    }).post(function (req, res) {
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

router.route('/category')
    .get(function (req, res) {
        category.find(function (err, resultado) {
            if (err) {
                res.status(500).json({ mensaje: 'Failed GET category' });
            }
            else {
                res.status(200).json(resultado);
            }
        });

    });

module.exports = router;