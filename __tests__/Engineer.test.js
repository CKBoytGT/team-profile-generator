const Engineer = require('../lib/engineer');

const testEmp = new Engineer('Harry S. Truman', '235', 'htruman@twinpeakspd.fake', 'htruman');

describe('Engineer class', () => {
    describe('getName method', () => {
        it('Returns employee name', () => {
            expect(testEmp.getName()).toEqual('Harry S. Truman');
        });
    });
    describe('getId method', () => {
        it('Returns employee ID number', () => {
            expect(testEmp.getId()).toEqual('235');
        });
    });
    describe('getEmail method', () => {
        it('Returns employee email address', () => {
            expect(testEmp.getEmail()).toEqual('htruman@twinpeakspd.fake');
        });
    });
    describe('getGithub method', () => {
        it("Returns engineer's GitHub username", () => {
            expect(testEmp.getGithub()).toEqual('htruman');
        });
    });
    describe('getRole method', () => {
        it('Returns Engineer', () => {
            expect(testEmp.getRole()).toEqual('Engineer');
        });
    });
});