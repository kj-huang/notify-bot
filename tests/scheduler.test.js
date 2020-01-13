const chai = require('chai');
const expect = chai.expect;

const fs = require('fs');

describe("Test Scheduler functions", () =>{
    it("should validate all format", async () =>{
        let data = await fs.readFileSync('./ScheduleDate.txt', 'utf-8');
        let d = data.split("\n")

        let r = true;
        d.forEach(a => {
            if(a.match(/([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))/gi).length === 0) r = false;
        })

        expect(r).to.be.true;
    })

    it("should only contain digital", async () =>{
        let data = await fs.readFileSync('./ScheduleDate.txt', 'utf-8');
        let d = data.split("\n")

        let r = true;
        d.forEach(a => {
            if(a.match(/([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))/gi).length  === 0) r = false;
        })

        expect(r).to.be.true;
    })
})