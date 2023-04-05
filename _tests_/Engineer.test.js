const Engineer = require("../lib/engineer");

// Questions
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an engineer object", () => {
      const engineer = new Engineer('Name', 1234, 'employee@mail.com', 'github');

      expect(engineer.github).toEqual(expect.any(String));
    });
  });
  describe('getGithub', () => {
    it("should return the engineer's github username"), () => {
      const engineer = new Engineer('Name', 1234, 'employee@gmail.com', 'github');

      expect(engineer.getGithub()).toEqual('github');
    }
  })
});
