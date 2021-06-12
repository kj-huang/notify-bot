import StatisticClubRules from "../services/NotifyRules/StatisticClubRules";
import NotificationRuleEngine from "../services/NotifyRules/NotificationRuleEngine";
import sinon from "sinon";

const DataAccess = require("../services/DataAccess");

describe('notification Rule Engine', function () {

    let notificationRuleEngine;

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
        statisticRule.push(new StatisticClubRules.RemoveData(today));

        notificationRuleEngine = new NotificationRuleEngine(statisticRule);
        return notificationRuleEngine.CheckNotifyDate(scheduledDate);
    }

    const sandbox = sinon.createSandbox();

    beforeEach(function () {
        sandbox.spy(DataAccess, "updateDateList");
    });


    it('should call remove data function', function () {
        let result = StatisticRulesFactory('20210703', '20210619');
        notificationRuleEngine.RemoveDataFromFile('fakeFile.txt', ["20210619", "20210731"]);
        expect(DataAccess.updateDateList.calledOnce).toBe(true);
    });

    afterEach(function () {
        sandbox.restore();
    });
});