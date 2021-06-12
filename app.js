require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const baseService = require("./services/statistic/base.service");
const baseService2 = require("./services/dynamic/base.service");
const LineBot = require("./services/statistic/linebot/line_init");
const LineBot2 = require("./services/dynamic/linebot/line_init");
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
  let messages = StatisticRulesFactory(now, scheduledDate);

  for (const m of messages) {
    await LineBot.pushText(process.env.LINE_STATISTIC_ID, m);
  }
}

async function sendMessageToDynamicClub(now) {
  let scheduledDate = await baseService2.readDateList();
  scheduledDate = scheduledDate.split('\r\n').filter((a) => { return moment(a).isSameOrAfter(now) });
  let messages = DynamicRulesFactory(now, scheduledDate);

  for (const m of messages) {
    await LineBot2.pushText(process.env.LINE_DYNAMIC_ID, m);
  }
}

function StatisticRulesFactory(now, scheduledDate) {
  let today = now;

  let statisticRule = [];
  statisticRule.push(new StatisticClubRules.AuditMessage(today));
  statisticRule.push(new StatisticClubRules.MarketingMessage(today));
  statisticRule.push(new StatisticClubRules.ActivityMessage(today));
  statisticRule.push(new StatisticClubRules.ActionMessage(today));
  statisticRule.push(new StatisticClubRules.MeetingMarketingMessage(today));
  statisticRule.push(new StatisticClubRules.MeetingFBMessage(today));
  statisticRule.push(new StatisticClubRules.RetroMessage(today));
  statisticRule.push(new StatisticClubRules.PostAuditMessage(today));

  let notificationRuleEngine = new NotificationRuleEngine(statisticRule);
  return notificationRuleEngine.CheckNotifyDate(scheduledDate);
}

function DynamicRulesFactory(now, scheduledDate) {
  let today = now;

  let dynamicRule = [];
  dynamicRule.push(new DynamicClubRules.AuditMessage(today));
  dynamicRule.push(new DynamicClubRules.MarketingMessage(today));
  dynamicRule.push(new DynamicClubRules.ActivityMessage(today));
  dynamicRule.push(new DynamicClubRules.ActionMessage(today));
  dynamicRule.push(new DynamicClubRules.MeetingMarketingMessage(today));
  dynamicRule.push(new DynamicClubRules.MeetingFBMessage(today));
  dynamicRule.push(new DynamicClubRules.RetroMessage(today));
  dynamicRule.push(new DynamicClubRules.PostAuditMessage(today));

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
