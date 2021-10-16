const { TestWatcher } = require("@jest/core")
const Employee = require("../lib/Employee")

describe("Employee", () =>{
    test("Correct Name", () => {
        // this is the test
        let employeeTest = new Employee("Lori", 1234, "loritimmons@gmail.com")
        // use in testing
        expect(employeeTest.getName()).toBe("Lori")
    })
    test("Correct Id", () => {
        // this is the test
        let employeeTest = new Employee("Lori", 1234, "loritimmons@gmail.com")
        // use in testing
        expect(employeeTest.getId()).toBe(1234)
    })
    // run email and get role. Require other classes on their file
})