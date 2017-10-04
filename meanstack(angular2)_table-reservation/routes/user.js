var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Table = require('../models/table');
router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        date: req.body.date,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        status:"waiting",
        size:req.body.size,
        table:req.body.t

    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var tt=new Table(
            {
                firstName: result.firstName,
                date: result.date,
                email: result.email,
                status: result.status,
                size:result.size,
                number:result.table,
                tsize:'20'
            }
        );
        tt.save (function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                })
            }
        });



        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if(user.status=="waiting"&&req.body.code!=user._id){
            return res.status(401).json({
                title: 'Login failedaa',
                error: {message:'waiting!provide your statuscode!'}
            });

        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        });
    });
});

module.exports = router;
