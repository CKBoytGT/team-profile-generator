const Employee = require('../lib/Employee');

describe('Employee class', () => {
    const testEmp = new Employee('Dougie Jones', '119', 'djones@lucky7.fake');
    describe('getName method', () => {
        it('Returns employee name', () => {
            expect(testEmp.getName()).toEqual('Dougie Jones');
        });
    });
    describe('getId method', () => {
        it('Returns employee ID number', () => {
            expect(testEmp.getId()).toEqual('119');
        });
    });
    describe('getEmail method', () => {
        it('Returns employee email address', () => {
            expect(testEmp.getEmail()).toEqual('djones@lucky7.fake');
        });
    });
    describe('getRole method', () => {
        it('Returns Employee', () => {
            expect(testEmp.getRole()).toEqual('Employee');
        });
    });
});