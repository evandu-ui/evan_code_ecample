var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var User = require('../models/user');
var Table = require('../models/table');


router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        if(decoded.admin.email!="admin@gmail.com")
        {
            return res.status(401).json({
                title: 'Not Authenticatedaaaa'

            });

        }
        next();
    })
});
router.get('/', function (req, res, next) {
    User.find()

        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: messages
            });
        });
});



router.post('/', function (req, res, next) {


        var message = new User({
            firstName: req.body.firstName,
            date: req.body.date,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email,
            status: req.body.status,
            size:req.body.size,
            table:req.body.table
        });
        message.save(function (err, result) {
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
                message: 'Saved message',
                obj: result
            });
        });
    });


router.patch('/:id', function (req, res, next) {

    User.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred1',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }

        message.firstName= req.body.firstName;
            message.date= req.body.date;
            message.password= bcrypt.hashSync(req.body.password, 10);
            message.email= req.body.email;
            message.status= req.body.status;
            message.size=req.body.size;





        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred2',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {

    User.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurreda',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }

        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurredb',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;