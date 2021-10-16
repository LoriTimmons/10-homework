const Employee = require("./Employee");

// has a connection to the parent file Employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Should match parent class exactly
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;