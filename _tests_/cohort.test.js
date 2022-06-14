const Cohort = require("../cohort.js");
const Student = require("../student.js");

describe("Cohort", () => {
    describe("Initialization", () => {
        it("should create an object with a 'students' array and 'capacity' integer", () => {
            const cohort = new Cohort();

            expect(cohort).toEqual({students: [], capacity:3});
        });
    });

    describe("addStudent", () => {
        it("should add a student to the 'students' array", () => {
            const student = new Student("Trent", 100);
            const cohort = new Cohort();

            cohort.addStudent(student);
            expect(cohort.students.length).toEqual(1);
            expect(cohort.students[0]).toBe(student);
        })

        it("Should not add a student over capacity", () => {
            const cohort = new Cohort();
            cohort.students = [
                new Student("John", 100),
                new Student("Althea", 100),
                new Student("Rabia", 100)
            ];
            const newStudent = new Student("Schmitty", 100);

            cohort.addStudent(newStudent);

            expect(cohort.students.length).toEqual(3);
        })
    });

    describe("changeGrade", () => {
        it("should change a student's grade based on given name", () => {
            const cohort = new Cohort();
            cohort.students = [
                new Student("Sampat", 100),
                new Student("Dylan", 99),
                new Student("Andrew", 100)
            ];

            cohort.changeGrade("Dylan", 100);
        })

        it("should not alter anything if the student does not exist", () => {
            const cohort = new Cohort();
            cohort.students = [
                new Student("Sampat", 100),
                new Student("Dylan", 99),
                new Student("Andrew", 100)
            ];

            cohort.changeGrade("Dillann", 100);
        })
    })
})