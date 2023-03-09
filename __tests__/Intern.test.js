const Intern = require('../lib/Intern');

describe('Intern class', () => {
    const testEmp = new Intern('Audrey Horne', '003', 'ahorne@fbi.fake', 'Twin Peaks High School');
    describe('getName method', () => {
        it('Returns employee name', () => {
            expect(testEmp.getName()).toEqual('Audrey Horne');
        });
    });
    describe('getId method', () => {
        it('Returns employee ID number', () => {
            expect(testEmp.getId()).toEqual('003');
        });
    });
    describe('getEmail method', () => {
        it('Returns employee email address', () => {
            expect(testEmp.getEmail()).toEqual('ahorne@fbi.fake');
        });
    });
    describe('getSchool method', () => {
        it("Returns name of intern's school", () => {
            expect(testEmp.getSchool()).toEqual('Twin Peaks High School');
        });
    });
    describe('getRole method', () => {
        it('Returns Intern', () => {
            expect(testEmp.getRole()).toEqual('Intern');
        });
    });
});