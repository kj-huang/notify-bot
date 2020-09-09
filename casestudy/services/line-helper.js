let model = {};
const LineBot = require("./linebot/line_init");

/**
 * 
 * @param {string} lineIDs - 推播訊息
 * @param {object} data - 
 */
model.At83 = async function(Id){
  await LineBot.pushText(Id, `請輔導組及學習組，在8/3(一)前提供黃老師一頁PPT的個案撰寫構想，需要有：
  1. 個案公司簡介(僅能一個)
  2. 個案的Issue(僅能一個)
  3. 作者簡介(個案提供者及主筆)
  4. 作者和個案公司的關係
  寄到 ssyy5678@gmail.com ; pmsuccess@gmail.com ; seanhs0622@gmail.com
  主旨：「快艇4主題選定，輔導/學習第X組，YY公司」
  提交後請在自己組別最前面打V_
  輔導組：
  1. 葉怡良
  2. 趙以選
  3. 陳淑娟-張碧珠
  4. 趙瑀-黎小美
  學習組：
  5.吳斯偉-鄭婕妤-沈盛達
  6.陳川正-吳道揆
  7.汪季婷-李佩真
  8.翁明祺
  9.蕭世雄-黃孟儒
  10.黃子佳
  11.李世樑
  12.郭翠菱
  13.陳凰珠
  14.吳奇岳-王逸萍-吳明憲
  15.林瓊香-黃秀勤
  16.林登雄-薛健宏
  17.楊馥鴻-黃遵誠
  18.鄧雅寧-夏冠群-陳建宏
  19.葉承宇-邱明慧
  20.林庭瑩-黃孟儒`)
}

model.pushCoach = async function (ID, date) {
  await LineBot.pushText(ID, `請輔導組在${date}(六)前提供黃老師第一次作業的PPT，內容為：個案公司與Issue，就是寫完個案本文。
  寄到   pmsuccess@gmail.com ; kmcccase@gmail.com
  主旨：「快艇4第${times}次作業，輔導第X組，YY公司」
  提交後請在自己組別最前面打V_
  輔導組：
  1.葉怡良
  2.趙以選
  3.陳淑娟-張碧珠
  5.吳斯偉-鄭婕妤-沈盛達-朱有義`);
}


model.pushLearn = async function (ID, date, times) {
  await LineBot.pushText(ID, `請學習組在${date}(六)前提供黃老師第一次作業的Word，內容為：個案公司與Issue，就是寫完個案本文。
  寄到 pmsuccess@gmail.com ; kmcccase@gmail.com
  主旨：「快艇4第${times}次作業，學習第X組，YY公司」
  提交後請在自己組別最前面打V_
  學習組：
  4.黎小美
  7.汪季婷-李佩真
  9.蕭世雄-黃孟儒
  11.李世樑
  12.郭翠菱
  13.陳凰珠
  14.吳奇岳-王逸萍-吳明憲
  15.林瓊香-黃秀勤
  16.林登雄-薛健宏
  17.楊馥鴻-黃遵誠
  18.鄧雅寧-夏冠群-陳建宏
  19.葉承宇-邱明慧
  20.林庭瑩-黃孟儒`);
}

model.pushNotifyBeforeReading = async function (ID) {
  await LineBot.pushText(ID, '快艇4輔導組及學習組好，提醒大家明晚2100要開黃老師輔導讀書會，請大家務必出席。Zoom連結將於明天0900公布，無法出席者請向Roger導師請假');
}

model.todayIsReading = async function (ID) {
  await LineBot.pushText(ID, `快艇4輔導組及學習組好，提醒大家今晚2100要開黃老師輔導讀書會，請大家務必出席。Zoom連結如下 https://zoom.us/j/5161816000?pwd=MHJUbzE2Z2Z4UkVkK1IrZHZob2xaUT09 ，無法出席者請向Roger導師請假
請輔導組預先看以下操作影片：
社群Zoom讀書會 主講人視角 https://youtu.be/c6PNHOKfEb4`);
}

model.At1025 = async function(Id){
  await LineBot.pushText(Id, `請輔導組及學習組在11/3(二)前提供黃老師一篇完成的個案，需要有：
  1.本文及教學手冊, 8000-17000字
  2.寫一家公司, 一個議題
  3.且透過管理模型來解決問題
  寄到 ssyy5678@gmail.com ; pmsuccess@gmail.com ; seanhs0622@gmail.com
  主旨：「快艇4結案報告，輔導/學習第X組，YY公司」
  未繳交者日後無法再參加快艇專案，提交後請在自己組別最前面打V_
  輔導組：
  1. 葉怡良
  2. 趙以選
  3. 陳淑娟-張碧珠
  4. 趙瑀-黎小美
  學習組：
  5.吳斯偉-鄭婕妤-沈盛達
  6.陳川正-吳道揆
  7.汪季婷-李佩真
  8.翁明祺
  9.蕭世雄-黃孟儒
  10.黃子佳
  11.李世樑
  12.郭翠菱
  13.陳凰珠
  14.吳奇岳-王逸萍-吳明憲
  15.林瓊香-黃秀勤
  16.林登雄-薛健宏
  17.楊馥鴻-黃遵誠
  18.鄧雅寧-夏冠群-陳建宏
  19.葉承宇-邱明慧
  20.林庭瑩-黃孟儒`)
}

model.pushUploadMsg = async function(ID){
  await LineBot.pushText(ID, '錄影志工世雄及神珠好，提醒您們將昨日輔導的讀書會影片上傳至快艇4的雲端資料夾 https://bit.ly/3ay4GY0 ，檔名命名方式如下: 191213_快艇1_第二次黃老師輔導_XX志工錄.mp4');
}

model.errorMsg = async function(ID, e){
  await LineBot.pushText(ID, e.toString());
}

module.exports = model;
