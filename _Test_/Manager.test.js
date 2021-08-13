const Manager = require("./lib/Manager");

describe("Manager", () => {
  describe("getOffice", () => {
    it("should return school of Manager", () => {
        const testManager = new Manager("John Smith", "123", "email@email.com", "321");
        const officeNumber = "321";

        const result = testManager.getOfficeNumber();

        
        expect(result).toEqual(officeNumber);
    });
  });

  describe("getRole", () => {
    it("should return role of Manager", () => {
        const testManager = new Manager("John Smith", "123", "email@email.com", "username");
        const role = "Manager";

        const result = testManager.getRole();

        
        expect(result).toEqual(role);
    });
  });
});