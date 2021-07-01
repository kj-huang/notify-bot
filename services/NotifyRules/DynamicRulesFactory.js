const DynamicClubRules = require("./DynamicClubRules");
const NotificationRuleEngine = require("./NotificationRuleEngine");

class DynamicRulesFactory {
    create(now){
        let today = now;

        let dynamicRule = [];
        dynamicRule.push(new DynamicClubRules.MarketingMessage(today));
        dynamicRule.push(new DynamicClubRules.ActivityMessage(today));
        dynamicRule.push(new DynamicClubRules.ActionMessage(today));
        dynamicRule.push(new DynamicClubRules.MeetingMarketingMessage(today));
        dynamicRule.push(new DynamicClubRules.MeetingFBMessage(today));
        dynamicRule.push(new DynamicClubRules.RetroMessage(today));
        dynamicRule.push(new DynamicClubRules.RemoveData(today));

        return new NotificationRuleEngine(dynamicRule);
    }
}
module.exports = DynamicRulesFactory