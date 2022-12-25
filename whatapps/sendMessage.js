const axios = require('axios');

function sendMessage(data) {
  var config = {
    method: 'POST',
    url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
    headers: {
      'Authorization': `Bearer EAALxx2nv6PYBAM7j3H1qNFLpxsgc0UUDm491VAYlys6IynaEjXGAcHsbjnk6aQ50905uBKR6M9LwcCAyC0mCbvbudKytZBpTMyIuWOOnvudtRtqFwl3ZAfca4zaBiN8OJlqHQzZBpIsYwgfCxEbvj6WAtxz1BTGcPIhSksZC3fJnbbI1ZBwo8A0EYCzBVf3XHUctlCuDJnkjeZBcVZCsHgG`,
      'Content-Type': 'application/json'
    },
    data: data
  };

  console.log(config);

  return axios(config)
}

module.exports = {
    sendMessage
}

// https://graph.facebook.com/v15.0/104995109141467/messages