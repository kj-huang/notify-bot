const StatisticClubRules = require("./StatisticClubRules");
const NotificationRuleEngine = require("./NotificationRuleEngine");

class StatisticRulesFactory {
    create(now){
        let today = now;
        let statisticRule = [];
        statisticRule.push(new StatisticClubRules.AuditMessage(today));
        statisticRule.push(new StatisticClubRules.MarketingMessage(today));
        // statisticRule.push(new StatisticClubRules.ActivityMessage(today));
        // statisticRule.push(new StatisticClubRules.ActionMessage(today));
        // statisticRule.push(new StatisticClubRules.MeetingMarketingMessage(today));
        statisticRule.push(new StatisticClubRules.MeetingFBMessage(today));
        statisticRule.push(new StatisticClubRules.RetroMessage(today));
        statisticRule.push(new StatisticClubRules.PostAuditMessage(today));
        statisticRule.push(new StatisticClubRules.RemoveData(today));

        return new NotificationRuleEngine(statisticRule);
    }
}

module.exports = StatisticRulesFactory