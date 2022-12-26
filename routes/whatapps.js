var express = require('express');
var wp = require("../whatapps");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendTextMessage', (req, res, next) => {
    const data = wp.prepareTextMessage({
        messageType: "text",
        recipientMobileNumber: '916389911001',
        recipientType: "individual",
        message: 'Welcome to Blue Bird Event, Whatapps service node.js working'
    })
    console.log('payload data: ', data);
    wp.sendMessage(data).then(val => {
        // console.log('data:', val);
        res.status(200).json(val);
    })
    .catch(error => {
        console.log('error:', error);
        res.status(500).json({
            error
        });
    } )

})

module.exports = router;
