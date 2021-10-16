const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
      // Should match parent class exactly
      super(name, id, email);
      this.github = github;
    }
    getRole() {
        return "Engineer";
      }
    getGithub() {
        return this.github
    }
}
module.exports = Engineer;