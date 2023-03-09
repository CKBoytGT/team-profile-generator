const Manager = require('../lib/Manager');

describe('Manager class', () => {
    const testEmp = new Manager('Gordon Cole', '001', 'gcole@fbi.fake', '315');
    describe('getName method', () => {
        it('Returns employee name', () => {
            expect(testEmp.getName()).toEqual('Gordon Cole');
        });
    });
    describe('getId method', () => {
        it('Returns employee ID number', () => {
            expect(testEmp.getId()).toEqual('001');
        });
    });
    describe('getEmail method', () => {
        it('Returns employee email address', () => {
            expect(testEmp.getEmail()).toEqual('gcole@fbi.fake');
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