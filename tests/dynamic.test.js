const DynamicClubRules = require("../services/NotifyRules/DynamicClubRules");
const NotificationRuleEngine = require("../services/NotifyRules/NotificationRuleEngine");

describe('Dynamic Club Rules', function () {
    let notificationRuleEngine;

    function DynamicRulesFactory(now, scheduledDate) {
        let today = now;

        let dynamicRule = [];
        dynamicRule.push(new DynamicClubRules.AuditMessage(today));
        dynamicRule.push(new DynamicClubRules.MarketingMessage(today));
        // dynamicRule.push(new DynamicClubRules.ActivityMessage(today));
        // dynamicRule.push(new DynamicClubRules.ActionMessage(today));
        // dynamicRule.push(new DynamicClubRules.MeetingMarketingMessage(today));
        dynamicRule.push(new DynamicClubRules.MeetingFBMessage(today));
        dynamicRule.push(new DynamicClubRules.RetroMessage(today));
        dynamicRule.push(new DynamicClubRules.PostAuditMessage(today));
        dynamicRule.push(new DynamicClubRules.RemoveData(today));

        notificationRuleEngine = new NotificationRuleEngine(dynamicRule);
        return notificationRuleEngine.CheckNotifyDate(scheduledDate);
    }

    it('should have Audit Message', function () {
        let result = DynamicRulesFactory('20210612', '20210619');
        expect(result.length).toBe(1);
        expect(result).toEqual(
            expect.arrayContaining(["提醒會員組虹秋開始準備稽核，第一次的稽核是稽核是否有填會員表連續五次出席讀書會，及有報名未出席讀書會，稽核對象為動態競爭相關社群"])
        );
    });
    it('should have Marketing Message', function () {
        let result = DynamicRulesFactory('20210616', '20210619');
        expect(result.length).toBe(1);
        expect(result).toEqual(
            expect.arrayContaining(['Robot提醒1.活動組 世嵩：提醒你今天需在各大群組發佈本週四的讀書會主題。\nRobot提醒2.活動組 世嵩：提醒你今天需在主群組接龍開始報名這次的活動，記得放活動DM。'])
        );
    });
    it('should have Action and Activity Message', function () {
        let result = DynamicRulesFactory('20210618', '20210619');
        expect(result.length).toBe(0);
        expect(result).toEqual(
            expect.arrayContaining([])
        );
    });
    it('should have Meeting Message', function () {
        let result = DynamicRulesFactory('20210619', '20210619');
        expect(result.length).toBe(1);
        expect(result).toEqual(
            expect.arrayContaining(["FB小編 京德:提醒您今天1200要開100字的FB心得分享區，並放在大群給有參與讀書會的人填寫。Robot 溫馨提醒"])
        );
    });
    it('should have Retro Message', function () {
        let result = DynamicRulesFactory('20210620', '20210619');
        expect(result.length).toBe(1);
        expect(result).toEqual(
            expect.arrayContaining(["資訊組 玉嬌：提醒今天要提供給三大社群這次分享的FB影片及下次活動DM。主群則提供影片連結，Robot 溫馨提醒"])
        );
    });
    it('should have PostAudit Message', function () {
        let result = DynamicRulesFactory('20210703', '20210619');
        expect(result.length).toBe(2);
        expect(result).toEqual(
            expect.arrayContaining(["提醒會員組虹秋稽核是否有加入大大社群，稽核對象為動態競爭相關社群"])
        );
    });
});