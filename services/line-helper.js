let model = {};
const LineBot = require("./linebot/line_init");
const LineMessage = require("./linebot/template");

/**
 * 
 * @param {string} lineIDs - 推播訊息
 * @param {object} data - 
 */
model.pushMarketingMsgTo = async function (ID) {
  await LineBot.pushText(ID, '活動組 佳佳：提醒妳今天需在各大群組發佈下週二的讀書會主題。Robot 溫馨提醒');
}

model.pushMsgTo = async function (ID) {
  await LineBot.pushText(ID, '活動組 世嵩：提醒你今天需在主群組接龍開始報名這次的活動，記得放活動DM。Robot 溫馨提醒');
}

model.pushActMsgTo = async function (ID) {
  await LineBot.pushText(ID, '活動組 世嵩：提醒你今天需上傳主群組接龍需放講員講義的連結。Robot 溫馨提醒');
}


model.pushActivityMsgTo = async function (ID) {
  await LineBot.pushText(ID, '活動組：提醒您今天讀書會，上午要發五大群組的今日活動預告。Robot 溫馨提醒');
}

model.pushRetroMsgTo = async function (ID) {
  await LineBot.pushText(ID, '資訊組 京德：提醒今天要提供給五大群組這次分享的影片及下次活動DM。Robot 溫馨提醒');
}

model.pushMktQuery = async function (ID) {
  await LineBot.pushText(ID, '問卷組 見昆：提醒你今天需宣傳問卷的服務。Robot 溫馨提醒');
}

model.pushQuerySvc = async function (ID) {
  await LineBot.pushText(ID, '問卷組 見昆：提醒你今天晚上需發布會員的問卷需求服務。Robot 溫馨提醒');
}

module.exports = model;
