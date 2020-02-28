const sheetHelper = require("./services/google/google-sheet-helper");
let moment = require("moment-timezone");

async function a(){
    let now = moment().tz("Asia/Taipei").format("YYYYMMDD");
    let ss = await readFromGoogleSheet("跑統計社!A22:B33")
    console.log(ss.filter((a) => { return moment(a).isAfter(now)}))
}

a();

//dataRange = "跑統計社!A22:B33"
async function readFromGoogleSheet(dataRange){
  let s = new sheetHelper("16lC0e5TFTq83Qs6PncZPI5t7-3HeYxCZAJDI_1kOUmU");
  await s.getAuthorize();
  let l = await s.ReadDataFrom(dataRange);

  let r = l.map((a) => {return new Date(a[1].split('/')[0], a[1].split('/')[1], a[1].split('/')[2])});

  return r;
}