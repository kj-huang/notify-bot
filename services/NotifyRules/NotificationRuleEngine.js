class NotificationRuleEngine {
    rules = [];

    constructor(rules) {
        this.rules = rules;
    }

    CheckNotifyDate(scheduledDate) {
        console.log(this.rules);
        let res = [];
        this.rules.forEach((rule) => {
            console.log(rule);
            let result = rule.CheckNotifyDate(scheduledDate);
            if (result !== '') {
                res.push(result);
            }
        });
        return res;
    }
}

module.exports = NotificationRuleEngine;