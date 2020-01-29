const { LineClient } = require('messaging-api-line');

// get accessToken and channelSecret from LINE developers website
const client = LineClient.connect({
  accessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN2,
  channelSecret: process.env.LINE_CHANNEL_SECRET2,
});

module.exports = client;