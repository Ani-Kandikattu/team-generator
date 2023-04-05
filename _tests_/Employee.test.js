const Employee = require("../lib/employee");

// Questions
describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an employee object", () => {
      const employee = new Employee("Name", 1234, "employee@mail.com");

      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  });

  describe("getName", () => {
    it("should return the employee's name", () => {
      const employee = new Employee("Name", 1234, "employee@mail.com");

      expect(employee.getName()).toEqual(expect.any(String));
    });
  });
  describe("getID", () => {
    it("should return the id of the employee", () => {
      const employee = new Employee("Name", 1234, "employee@mail.com");

      expect(employee.getID()).toEqual(expect.any(Number));
    })
  })
  
  describe("getEmail", () => {
    it("should return the email of the employee", () => {
      const employee = new Employee("Name", 1234, "employee@mail.com");

      expect(employee.getEmail()).toEqual(expect.any(String));
    })
  })

  describe("getRole", () => {
    it("should return the employee's role", () => {
      const employee = new Employee("Name", 1234, "employee@mail.com");

      expect(employee.getRole()).toEqual('Employee');
    });
});
});