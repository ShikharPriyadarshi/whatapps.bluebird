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
        recipientMobileNumber: process.env.RECIPIENT_WAID,
        recipientType: "individual",
        message: 'Welcome to Blue Bird Event, Whatapps service node.js working'
    })
    wp.sendMessage(data).then(_ => {
        res.sendStatus(200);
    }).catch(error => {
        res.status(500).json({
            error
        });
    } )

})

module.exports = router;
