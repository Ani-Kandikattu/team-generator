const Employee = require("../lib/employee");

// Questions
describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an employee object", () => {
      const employee = new Employee('Name', 1234, 'employee@mail.com');

      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  });
});
