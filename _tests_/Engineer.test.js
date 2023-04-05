const Engineer = require("../lib/engineer");

// Questions
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an engineer object", () => {
      const engineer = new Engineer();

      expect(engineer.github).toEqual(expect.any(String));
    });
  });
});
