require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const lineHelper = require("./services/line-helper");
let app = express();
let moment = require("moment-timezone");
const baseService = require("./services/base.service");

cron.schedule('0 1 * * *',async () => {
    console.log("notify at 09:00 in Taiwan");
    try{
      let scheduleDates = await baseService.readDateList();
      if(scheduleDates !== ""){
        scheduleDates = scheduleDates.split("\n");
    
        let now = moment().tz("Asia/Taipei").format("YYYYMMDD");
        if(baseService.isRemainFiveDays(now, scheduleDates[0])){
          lineHelper.pushMarketingMsgTo('Cab8dc815286247966f63012fb4dd64e4');
        } 
        
        else if(baseService.isRemainThreeDays(now, scheduleDates[0])){
          lineHelper.pushMsgTo('Cab8dc815286247966f63012fb4dd64e4');
        } 
  
        else if(baseService.isRemainOneDays(now, scheduleDates[0])){
          lineHelper.pushActMsgTo('Cab8dc815286247966f63012fb4dd64e4');
        }
        
        else if(baseService.isToday(now, scheduleDates[0])){
          lineHelper.pushActivityMsgTo('Cab8dc815286247966f63012fb4dd64e4');
        } 
        
        else if(baseService.isDPlusOneDay(now, scheduleDates[0])){
          lineHelper.pushRetroMsgTo('Cab8dc815286247966f63012fb4dd64e4');
    
          //housekeeping
          scheduleDates.shift();
          //write back to file
          await baseService.updateDateList(scheduleDates);
        }
      } else {
        console.log("No schedule Date!");
      }
    } catch(e){
      console.log(e);
    }
  });