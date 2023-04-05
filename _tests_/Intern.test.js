const Intern = require("../lib/intern");

// Questions
describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an intern object", () => {
      const intern = new Intern();

      expect(intern.school).toEqual(expect.any(String));
    });
  });
});
