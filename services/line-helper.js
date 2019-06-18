let model = {};
const LineBot = require("./linebot/line_init");
const LineMessage = require("./linebot/template");

/**
 * 
 * @param {string} lineIDs - 推播訊息
 * @param {object} data - 
 */
model.pushMarketingMsgTo = async function (ID) {
  await LineBot.pushText(ID, 'Marketing');
}

model.pushMsgTo = async function (ID) {
  await LineBot.pushText(ID, '接龍');
}

model.pushActivityMsgTo = async function (ID) {
  await LineBot.pushText(ID, 'Activity');
}

module.exports = model;