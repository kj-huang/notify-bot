const fs = require('fs');
let model = {};

model.readDateList = async function (fileName) {
    let data = await fs.readFileSync(fileName, 'utf-8');
    return data;
}

model.updateDateList = async function (fileName, data) {
    let str = data.join("\n");
    await fs.writeFileSync(fileName, str);
}

module.exports = model;
