const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    const testEmp = new Engineer('Dale Cooper', '002', 'dcooper@fbi.fake', 'goodcoffee');
    describe('getName method', () => {
        it('Returns employee name', () => {
            expect(testEmp.getName()).toEqual('Dale Cooper');
        });
    });
    describe('getId method', () => {
        it('Returns employee ID number', () => {
            expect(testEmp.getId()).toEqual('002');
        });
    });
    describe('getEmail method', () => {
        it('Returns employee email address', () => {
            expect(testEmp.getEmail()).toEqual('dcooper@fbi.fake');
        });
    });
    describe('getGithub method', () => {
        it("Returns engineer's GitHub username", () => {
            expect(testEmp.getGithub()).toEqual('goodcoffee');
        });
    });
    describe('getRole method', () => {
        it('Returns Engineer', () => {
            expect(testEmp.getRole()).toEqual('Engineer');
        });
    });
});