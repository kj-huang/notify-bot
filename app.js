require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const baseService = require("./services/base.service");
const baseService2 = require("./dynamic/services/base.service");
const LineBot = require("./services/linebot/line_init");
let app = express();
let moment = require("moment-timezone");
let NotificationRuleEngine = require('./services/NotifyRules/NotificationRuleEngine');
let StatisticClubRules = require('./services/NotifyRules/StatisticClubRules');
let DynamicClubRules = require('./services/NotifyRules/DynamicClubRules');

//跑統計社 Cab8dc815286247966f63012fb4dd64e4
//動態競爭 Cf62c1689b42440bd588d9b3eb063dd05
//快艇提醒機器人 C071ecfc78589b2f4840980c15059c681
//Me U9001a7b94e9039fbfd7938f5801e78c9
//Roger Ub39c328baddea9fd4204d4edb166dc80

async function main() {
  console.log("notify at 09:00 in Taiwan");
  let now = moment().tz("Asia/Taipei").format("YYYYMMDD");

  await sendMessageToStatisticClub(now);
  await sendMessageToDynamicClub(now);
}

async function sendMessageToStatisticClub(now) {
  let scheduledDate = await baseService.readDateList();
  scheduledDate = scheduledDate.split('\r\n').filter((a) => { return moment(a).isSameOrAfter(now) });
  let messages = StatisticClubMessageFactory(scheduledDate);

  messages.forEach(async (m) => {
    await LineBot.pushText(process.env.LINE_STATISTIC_ID, m);
  })
}

async function sendMessageToDynamicClub(now) {
  let scheduledDate = await baseService2.readDateList();
  scheduledDate = scheduledDate.split('\r\n').filter((a) => { return moment(a).isSameOrAfter(now) });
  let messages = DynamicClubMessageFactory(scheduledDate);

  messages.forEach(async (m) => {
    await LineBot.pushText(process.env.LINE_DYNAMIC_ID, m);
  })
}

function StatisticClubMessageFactory(scheduledDate) {
  let statisticRule = [];
  statisticRule.push(new StatisticClubRules.AuditMessage())
  statisticRule.push(new StatisticClubRules.MarketingMessage())
  statisticRule.push(new StatisticClubRules.ActivityMessage())
  statisticRule.push(new StatisticClubRules.ActionMessage())
  statisticRule.push(new StatisticClubRules.MeetingMarketingMessage())
  statisticRule.push(new StatisticClubRules.MeetingFBMessage())
  statisticRule.push(new StatisticClubRules.RetroMessage())
  statisticRule.push(new StatisticClubRules.PostAuditMessage())

  let notificationRuleEngine = new NotificationRuleEngine(statisticRule);

  return notificationRuleEngine.CheckNotifyDate(scheduledDate);
}

function DynamicClubMessageFactory(scheduledDate) {
  let dynamicRule = [];
  // dynamicRule.push(new DynamicClubRules.AuditMessage())
  dynamicRule.push(new DynamicClubRules.MarketingMessage())
  dynamicRule.push(new DynamicClubRules.ActivityMessage())
  dynamicRule.push(new DynamicClubRules.ActionMessage())
  dynamicRule.push(new DynamicClubRules.MeetingMarketingMessage())
  dynamicRule.push(new DynamicClubRules.MeetingFBMessage())
  dynamicRule.push(new DynamicClubRules.RetroMessage())
  // dynamicRule.push(new DynamicClubRules.PostAuditMessage())

  let notificationRuleEngine = new NotificationRuleEngine(dynamicRule);

  return notificationRuleEngine.CheckNotifyDate(scheduledDate);
}

/* 
 * 讀書會 schedule events 
 */
// 0 0 * * * => AM8:00 at Taipei/Asia
cron.schedule('0 1 * * *', main);

const handleEvent = (event) => {
  const { type, replyToken, message } = event;
  const messageType = message.type;
  if (type !== 'message' || messageType !== 'text') {
    return Promise.resolve(null);
  }
  console.log(event.source)
};

app.post('/webhook', (req, res) => {
  const { body } = req;
  const { events } = body;

  Promise.all(events.map(handleEvent))
    .then((result) => res.status(200).send(result))
    .catch((err) => console.log(err));
});

module.exports = app;
