const Intern = require('../lib/Intern');

const testEmp = new Intern('Audrey Horne', '1989', 'ahorne@greatnorthern.fake', 'Twin Peaks High School');

describe('Intern class', () => {
    describe('getName method', () => {
        it('Returns employee name', () => {
            expect(testEmp.getName()).toEqual('Audrey Horne');
        });
    });
    describe('getId method', () => {
        it('Returns employee ID number', () => {
            expect(testEmp.getId()).toEqual('1989');
        });
    });
    describe('getEmail method', () => {
        it('Returns employee email address', () => {
            expect(testEmp.getEmail()).toEqual('ahorne@greatnorthern.fake');
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