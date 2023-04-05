const Intern = require("../lib/intern");

// Questions
describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an intern object", () => {
      const intern = new Intern('Name', 1234, 'employee@mail.com', 'school');

      expect(intern.school).toEqual(expect.any(String));
    });
  });
  describe('getSchool', () => {
    it("should return the intern's school"), () => {
      const intern = new Intern('Name', 1234, 'employee@gmail.com', 'school');

      expect(intern.getschool()).toEqual('school');
    }
})
});