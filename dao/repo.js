const fs = require('fs');
let model = {};

model.readDateList = async function(){
    let data = await fs.readFileSync('../ScheduleDate.txt', 'utf-8');
    return data;
}

model.updateDateList = async function(data){
    let str = data.join("\n");
    await fs.writeFileSync('../ScheduleDate.txt', str);
}

module.exports = model;
