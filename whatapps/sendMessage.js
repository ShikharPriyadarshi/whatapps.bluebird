const axios = require('axios');

function sendMessage(data) {
  var config = {
    method: 'POST',
    url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: data
  };

  // console.log(config);

  return axios(config)
}

module.exports = {
    sendMessage
}

// https://graph.facebook.com/v15.0/104995109141467/messages