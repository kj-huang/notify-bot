require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const lineHelper = require("./services/line-helper");
let app = express();
let moment = require("moment-timezone");
const repoHelper = require("./dao/repo");





cron.schedule('35 22 * * *',async () => {
  try{
  let scheduleDates = await repoHelper.readDateList();

    if(scheduleDates !== ""){
      scheduleDates = scheduleDates.split("\n");
  
      let now = moment().tz("Asia/Taipei").format("YYYYMMDD");
      if(now == (scheduleDates[0] - 5)){
        lineHelper.pushMarketingMsgTo('Ud71f40b250f1646956f5a46f4e996323');
      } else if(now == (scheduleDates[0] - 3)){
        lineHelper.pushMsgTo('Ud71f40b250f1646956f5a46f4e996323');
      } else if(now === scheduleDates[0] ){
        lineHelper.pushActivityMsgTo('Ud71f40b250f1646956f5a46f4e996323');
  
        //housekeeping
        scheduleDates.shift();
        //write back to file
        repoHelper.updateDateList(scheduleDates);
      }
    } else {
      console.log("No schedule Date!");
    }
  } catch(e){
    console.log(e);
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;