const Employee = require("./Employee");

// Inherit Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        // Override Employee role
        super.role = "Manager";

    }
    // Methods
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;