const Employee = require("./Employee");

// Inherit Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        // Override Employee role
        super.role = "Engineer";
    }
    // Methods.
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;