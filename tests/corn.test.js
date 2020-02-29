const chai = require('chai');
const expect = chai.expect;
const cron = require('node-cron');

describe("Test Date Calculator functions", () =>{
    it("should validate with cron register at 0 0 * * *", () =>{
        let valid = cron.validate('0 0 * * *');
        expect(valid).to.be.true;
    })

    it("should validate with cron register at 0 0 1 * * Tuesday", () =>{
        let valid = cron.validate('0 0 1 * * * Tuesday');
        expect(valid).to.be.true;
    })

    it("should validate with cron register at 0 0 1 * * Friday", () =>{
        let valid = cron.validate('0 0 1 * * Friday');
        expect(valid).to.be.true;
    })
})