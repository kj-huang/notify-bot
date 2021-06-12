let functions = {};

const path = require('path');
const fs = require('fs');
let filePath = path.join(__dirname, '../../scheduleDynamicDate.txt');
console.log(filePath);

functions.readDateList = async function () {
    let data = await fs.readFileSync(filePath, 'utf-8');
    return data;
}

module.exports = functions;
