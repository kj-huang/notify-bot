class NotificationRuleEngine {
    rules = [];
    
    constructor(rules) {
        this.rules = rules;
    }
    
    CheckNotifyDate(scheduledDate){
        let res = []
        this.rules.forEach((rule) => {
            result = rule.checkDate(scheduledDate);
            if(result !== ''){
                res.push(result);
            }
        })
        return res;
    }
}

module.exports = NotificationRuleEngine;