const Employee = require("./Employee");

// Inherit Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        // Override Employee role
        super.role = "Intern";
    }
    // Methods
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;