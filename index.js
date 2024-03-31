// Code your solution in this file!
let companyName = 'Scuber';
describe('index.js', function () {
    describe('companyName', function () {
      it('is set as Scuber', function () {
        expect(companyName).to.equal('Scuber');
      });
  
      it('is defined as a const', function () {
        expect(js).to.match(/const companyName/, "Expected companyName to be a const");
      });
    });