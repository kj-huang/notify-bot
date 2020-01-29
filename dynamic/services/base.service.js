let moment = require("moment-timezone");
let functions = {};

const path = require('path');
const fs = require('fs');
let filePath = path.join(__dirname, '../scheduleDate.txt');
console.log(filePath);

functions.readDateList = async function () {
    let data = await fs.readFileSync(filePath, 'utf-8');
    return data;
}

functions.updateDateList = async function (data) {
    let str = data.join("\n");
    await fs.writeFileSync(filePath, str);
}

functions.isRemainFiveDays = function (now, d) {
    return (now === moment(d).subtract(5, 'days').tz("Asia/Taipei").format("YYYYMMDD"));
}

functions.isRemainThreeDays = function (now, d) {
    return (now === moment(d).subtract(3, 'days').tz("Asia/Taipei").format("YYYYMMDD"));
}

functions.isRemainOneDays = function (now, d) {
    return (now === moment(d).subtract(1, 'days').tz("Asia/Taipei").format("YYYYMMDD"));
}

functions.isToday = function (now, d) {
    return (now === moment(d).tz("Asia/Taipei").format("YYYYMMDD"));
}

functions.isDPlusOneDay = function (now, d) {
    return (now === moment(d).add(1, 'days').tz("Asia/Taipei").format("YYYYMMDD"));
}

module.exports = functions;