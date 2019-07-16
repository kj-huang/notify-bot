const chai = require('chai');
const expect = chai.expect;
const cron = require('node-cron');

describe("Test Date Calculator functions", () =>{
    it("should validate with cron register at 0 1 * * *", () =>{
        let valid = cron.validate('0 1 * * *');
        expect(valid).to.be.true;
    })

    it("should validate with cron register at 0 1 * * * 2", () =>{
        let valid = cron.validate('0 1 * * * 2');
        expect(valid).to.be.true;
    })

    it("should validate with cron register at 0 1 * * * 5", () =>{
        let valid = cron.validate('0 1 * * * 5');
        expect(valid).to.be.true;
    })
})