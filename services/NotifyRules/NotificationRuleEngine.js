const DataAccess = require("../DataAccess");

class NotificationRuleEngine {
    rules = [];

    constructor(rules) {
        this.rules = rules;
    }

    CheckNotifyDate(scheduledDate) {
        let res = [];
        this.rules.forEach((rule) => {
            let result = rule.CheckNotifyDate(scheduledDate);
            if (result && result !== '' && typeof (result) !== "boolean") {
                res.push(result);
            }
        });
        return res;
    }


    async RemoveDataFromFile(fileName, data) {
        data.shift();
        await DataAccess.updateDateList(fileName, data);
    }
}

module.exports = NotificationRuleEngine;