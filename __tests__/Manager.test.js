const Manager = require('../lib/Manager');

const testEmp = new Manager('Dale Cooper', '430', 'dcooper@fbi.fake', '315');

describe('Manager class', () => {
    describe('getName method', () => {
        it('Returns employee name', () => {
            expect(testEmp.getName()).toEqual('Dale Cooper');
        });
    });
    describe('getId method', () => {
        it('Returns employee ID number', () => {
            expect(testEmp.getId()).toEqual('430');
        });
    });
    describe('getEmail method', () => {
        it('Returns employee email address', () => {
            expect(testEmp.getEmail()).toEqual('dcooper@fbi.fake');
        });
    });
    describe('getOfficeNumber method', () => {
        it("Returns manager's office number", () => {
            expect(testEmp.getOfficeNumber()).toEqual('315');
        });
    });
    describe('getRole method', () => {
        it('Returns Manager', () => {
            expect(testEmp.getRole()).toEqual('Manager');
        });
    });
});