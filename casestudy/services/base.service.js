let moment = require("moment-timezone");
let functions = {};

const path = require('path');
const fs = require('fs');
let filePath = path.join(__dirname, '../../scheduleDynamicDate.txt');
console.log(filePath);

functions.readDateList = async function () {
    let data = await fs.readFileSync(filePath, 'utf-8');
    return data;
}

functions.updateDateList = async function (data) {
    let str = data.join("\n");
    await fs.writeFileSync(filePath, str);
}

functions.isRemain13Days = function (now, d) {
    return (now === moment(d).subtract(13, 'days').tz("Asia/Taipei").format("YYYYMMDD"));
}

functions.isRemainSixDays = function (now, d) {
    return (now === moment(d).subtract(6, 'days').tz("Asia/Taipei").format("YYYYMMDD"));
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

functions.is83 = function (now) {
    return (now === moment.tz("2020-08-03 09:00", "Asia/Taipei").format("YYYYMMDD"));
}

functions.is1025 = function (now) {
    return (now === moment.tz("2020-10-25 09:00", "Asia/Taipei").format("YYYYMMDD"));
}

module.exports = functions;
