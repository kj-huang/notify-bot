const chai = require('chai');
const expect = chai.expect;

let service = require('../services/base.service');

describe("Test FIle Manipulate functions", () =>{
    it("should readfile", function(done){
        service.readDateList().then((res)=>{
            expect(res).to.be.a('string');
            done();
        })
    })
})