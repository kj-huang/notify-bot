let model = {};
const LineBot = require("./linebot/line_init");
const LineMessage = require("./linebot/template");

/**
 * 
 * @param {string} lineIDs - 推播訊息
 * @param {object} data - 
 */
model.pushMarketingMsgTo = async function (ID) {
  await LineBot.pushText(ID, '跑統計讀書會社群行銷提醒');
}

model.pushMsgTo = async function (ID) {
  await LineBot.pushText(ID, '跑統計讀書會社群接龍');
}

model.pushActivityMsgTo = async function (ID) {
  await LineBot.pushText(ID, '今天有跑統計讀書會！');
}

module.exports = model;