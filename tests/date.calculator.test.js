const chai = require('chai');
const expect = chai.expect;
let moment = require("moment-timezone");
let service = require('../services/base.service');

describe("Test Date Calculator functions", () =>{
    let today;
    let d;
    beforeEach(function(){
        today = moment().tz("Asia/Taipei").format("YYYYMMDD");
        d = moment().tz("Asia/Taipei").format("YYYYMMDD");;
    })

    it("should retrun 5 days", function(){
        d = moment(d).add(5, 'days');
        expect(service.isRemainFiveDays(today, d)).to.be.true;
    })

    it("should retrun 3 days", function(){
        d = moment(d).add(3, 'days');
        expect(service.isRemainThreeDays(today, d)).to.be.true;
    })

    it("should retrun today", function(){
        expect(service.isToday(today, d)).to.be.true;
    });
})