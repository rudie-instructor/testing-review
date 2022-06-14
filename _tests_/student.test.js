const Student = require("../student.js");

describe("Student", () => {
    describe("Initialization", () => {
        it("should create an object with a name and grade if provided with valid arguments", () => {
            // Creating a new instance to test with valid arguments
            const student = new Student("Mariya", 100);

            expect(student.name).toEqual("Mariya");
            expect(student.grade).toEqual(3);
        });

        it("should throw an error if provided no arguments", () => {
            // Creating a callback to test invalid arguments and make sure an error is returned
            const callback = () => new Student();

            expect(callback).toThrow();
        });

        it("should throw a specific error if not provided a grade", () => {
            // Creating a callback to test an error
            const callback = () => new Student();

            const error = new Error("Expected parameter 'grade' to be a non-negative number");

            expect(callback).toThrowError(error);
        });

        it("should throw a specific error if 'grade' is not a number", () => {
            const callback = () => new Student("Michael", "2");
            const error = new Error("Expected parameter 'grade' to be a non-negative number");
      
            expect(callback).toThrowError(error);
          });
      
          it("should throw a specific error if 'grade' is less than 0", () => {
            const callback = () => new Student("Michael", -1);
            const err = new Error("Expected parameter 'grade' to be a non-negative number");
      
            expect(callback).toThrowError(error);
          });
    })
})