const Manager = require("../lib/manager");

// Questions
describe("Manager", () => {
  describe("Initialization", () => {
    it("should create a manager object", () => {
      const manager = new Manager();

      expect(manager.officeNumber).toEqual(expect.any(Number));
    });
  });
});
