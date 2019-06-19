require('dotenv').config();
const express = require('express');
const fs = require('fs');
const cron = require('node-cron');
const lineHelper = require("./services/line-helper");
let app = express();
let moment = require("moment-timezone");

cron.schedule('0 2 * * *',async () => {
  console.log("notify at 10:00 in Taiwan")
  try{
    let scheduleDates = await readDateList();
    
    if(scheduleDates !== ""){
      scheduleDates = scheduleDates.split("\n");
  
      let now = moment().tz("Asia/Taipei").format("YYYYMMDD");
      if(now == (scheduleDates[0] - 5)){
        lineHelper.pushMarketingMsgTo('Cab8dc815286247966f63012fb4dd64e4');
      } else if(now == (scheduleDates[0] - 3)){
        lineHelper.pushMsgTo('Cab8dc815286247966f63012fb4dd64e4');
      } else if(now === scheduleDates[0] ){
        lineHelper.pushActivityMsgTo('Cab8dc815286247966f63012fb4dd64e4');
  
        //housekeeping
        scheduleDates.shift();
        //write back to file
        await updateDateList(scheduleDates);
      }
    } else {
      console.log("No schedule Date!");
    }
  } catch(e){
    console.log(e);
  }
});

async function readDateList(){
  let data = await fs.readFileSync('/app/ScheduleDate.txt', 'utf-8');
  return data;
}

async function updateDateList(data){
  let str = data.join("\n");
  await fs.writeFileSync('/app/ScheduleDate.txt', str);
}

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


module.exports = app;
