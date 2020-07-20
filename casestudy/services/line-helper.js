let model = {};
const LineBot = require("./linebot/line_init");

/**
 * 
 * @param {string} lineIDs - 推播訊息
 * @param {object} data - 
 */
model.pushCase1 = async function (ID) {
  await LineBot.pushText(ID, '快艇4輔導組好，提醒你距輔導日期還剩五天，請將您的簡報寄給黃老師，主旨：「輔導3組，第2次報告，YY公司」。最遲2天前的中午12點前要寄出。寄到以下三個信箱 ssyy5678@gmail.com ; PMsuccess@gmail.com ; seanhs0622@gmail.com。若未收到，幹部會在快艇4群組提醒。');
}

model.pushCase2 = async function (ID) {
  await LineBot.pushText(ID, '快艇4學習組好，提醒你距輔導日期還剩五天，請將您的簡報寄給黃老師，主旨：「學習1組，第2次PPT，YY公司」。最遲2天前的中午12點前要寄出。寄到以下三個信箱 ssyy5678@gmail.com ; PMsuccess@gmail.com ; seanhs0622@gmail.com。若未收到，幹部會在快艇4群組提醒。');
}

model.pushCase3 = async function (ID) {
  await LineBot.pushText(ID, '快艇4輔導組好，提醒你距輔導日期還剩三天，請將您的簡報寄給黃老師，主旨：「輔導3組，第2次報告，YY公司」。最遲2天前的中午12點前要寄出。寄到以下三個信箱 ssyy5678@gmail.com ; PMsuccess@gmail.com ; seanhs0622@gmail.com。若未收到，幹部會在快艇4群組提醒。');
}

model.pushCase4 = async function (ID) {
  await LineBot.pushText(ID, '快艇4學習組好，提醒你距輔導日期還剩三天，請將您的簡報寄給黃老師，主旨：「學習1組，第2次PPT，YY公司」。最遲2天前的中午12點前要寄出。寄到以下三個信箱 ssyy5678@gmail.com ; PMsuccess@gmail.com ; seanhs0622@gmail.com。若未收到，幹部會在快艇4群組提醒。');
}

model.pushCase5 = async function (ID) {
  await LineBot.pushText(ID, '快艇4輔導組好，提醒你距輔導日期還剩最後一天，請將您的簡報寄給黃老師，主旨：「輔導3組，第2次報告，YY公司」。最遲2天前的中午12點前要寄出。寄到以下三個信箱 ssyy5678@gmail.com ; PMsuccess@gmail.com ; seanhs0622@gmail.com。若未收到，幹部會在快艇4群組提醒。');
}

model.pushCase6 = async function (ID) {
  await LineBot.pushText(ID, '快艇4學習組好，提醒你距輔導日期還剩最後一天，請將您的簡報寄給黃老師，主旨：「學習1組，第2次PPT，YY公司」。最遲2天前的中午12點前要寄出。寄到以下三個信箱 ssyy5678@gmail.com ; PMsuccess@gmail.com ; seanhs0622@gmail.com。若未收到，幹部會在快艇4群組提醒。');
}

model.pushCase7 = async function (ID) {
  await LineBot.pushText(ID, '快艇4輔導組及學習組好，提醒大家今晚2100要開黃老師輔導讀書會，請大家務必出席。Zoom連結如下 https://zoom.us/j/5161816000?pwd=MHJUbzE2Z2Z4UkVkK1IrZHZob2xaUT09 ，無法出席者請向Roger導師請假。');
}


module.exports = model;
