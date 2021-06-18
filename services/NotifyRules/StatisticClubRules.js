let moment;
moment = require("moment-timezone");

class AuditMessage {
    today;

    constructor(today) {
        this.today = today;
    }

    CheckNotifyDate(scheduledDate) {
        let date = moment(scheduledDate).subtract(7, 'days').tz("Asia/Taipei").format("YYYYMMDD");
        if (date === this.today) {
            return '提醒會員組虹秋開始準備稽核，第一次的稽核是稽核是否有填會員表連續五次出席讀書會，及有報名未出席讀書會，稽核對象為跑統計學術群、實務群及大大社群';
        }
        return '';
    }
}

class MarketingMessage {
    today;

    constructor(today) {
        this.today = today;
    }

    CheckNotifyDate(scheduledDate) {
        let date = moment(scheduledDate).subtract(3, 'days').tz("Asia/Taipei").format("YYYYMMDD");
        if (date === this.today) {
            return 'Robot提醒1.活動組 世嵩：提醒你今天需在各大群組發佈下週二的讀書會主題。\nRobot提醒2.活動組 世嵩：提醒你今天需在主群組接龍開始報名這次的活動，記得放活動DM。';
        }
        return '';
    }
}

class ActivityMessage {
    today;

    constructor(today) {
        this.today = today;
    }

    CheckNotifyDate(scheduledDate) {
        let date = moment(scheduledDate).subtract(1, 'days').tz("Asia/Taipei").format("YYYYMMDD");
        if (date === this.today) {
            return 'Robot提醒1.講師組 國龍：提醒你今天需上傳主群組接龍需放講員講義的連結，並且將講義連結放置PO文接龍表。\nRobot提醒2.講師組 國龍：提醒你今天需請主講人1.觀看主講人SOP影片 2.請講師當天2050上線測試 3.開始前要求與會者寫FB100字心得。';
        }
        return '';
    }
}

class ActionMessage {
    today;

    constructor(today) {
        this.today = today;
    }

    CheckNotifyDate(scheduledDate) {
        let date = moment(scheduledDate).subtract(1, 'days').tz("Asia/Taipei").format("YYYYMMDD");
        if (date === this.today) {
            return '活動組 世嵩：提醒您今晚2000要發布有報名的人員Zoom連結，要加上講員講義。Robot 溫馨提醒';
        }
        return '';
    }
}

class MeetingMarketingMessage {
    today;

    constructor(today) {
        this.today = today;
    }

    CheckNotifyDate(scheduledDate) {
        let date = moment(scheduledDate).tz("Asia/Taipei").format("YYYYMMDD");
        if (date === this.today) {
            return 'Robot提醒1.活動組 世嵩：提醒您今天讀書會，上午1200前要發三大社群(不包含個案社)的今晚的活動預告，要加上講員講義。主群是接龍PO文+講員講義再度提醒。\nRobot提醒2.活動組 世嵩：提醒您晚上2030要將報名連結關閉，並且重新發布ZOOM連結及報名講義給有報名的人員。';
        }
        return '';
    }
}

class MeetingFBMessage {
    today;

    constructor(today) {
        this.today = today;
    }

    CheckNotifyDate(scheduledDate) {
        let date = moment(scheduledDate).tz("Asia/Taipei").format("YYYYMMDD");
        if (date === this.today) {
            return 'FB小編 世嵩:提醒您今天1200要開100字的FB心得分享區，並放在大群給有參與讀書會的人填寫。Robot 溫馨提醒';
        }
        return '';
    }
}

class RetroMessage {
    today;

    constructor(today) {
        this.today = today;
    }

    CheckNotifyDate(scheduledDate) {
        let date = moment(scheduledDate).add(1, 'days').tz("Asia/Taipei").format("YYYYMMDD");
        if (date === this.today) {
            return '資訊組 宜蓁：提醒今天要提供給三大社群這次分享的FB影片及下次活動DM。主群則提供影片連結，Robot 溫馨提醒';
        }
        return '';
    }
}

class PostAuditMessage {
    today;

    constructor(today) {
        this.today = today;
    }

    CheckNotifyDate(scheduledDate) {
        let date = moment(scheduledDate).add(7, 'days').tz("Asia/Taipei").format("YYYYMMDD");
        if (date === this.today) {
            return '提醒會員組虹秋稽核是否有加入大大社群，稽核對象為跑統計學術群、實務群及大大社群+偉豪學院及Python社群';
        }
        return '';
    }
}
class RemoveData {
    today;

    constructor(today) {
        this.today = today;
    }

    CheckNotifyDate(scheduledDate) {
        let date = moment(scheduledDate).add(7, 'days').tz("Asia/Taipei").format("YYYYMMDD");
        if (date === this.today) {
            return "True";
        }
    }
}

module.exports = {
    AuditMessage: AuditMessage,
    MarketingMessage: MarketingMessage,
    ActivityMessage: ActivityMessage,
    ActionMessage: ActionMessage,
    MeetingMarketingMessage: MeetingMarketingMessage,
    MeetingFBMessage: MeetingFBMessage,
    RetroMessage: RetroMessage,
    PostAuditMessage: PostAuditMessage,
    RemoveData: RemoveData
};