const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      // Should match parent class exactly
      super(name, id, email);
      this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;