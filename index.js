const Student = require("./student");
const Cohort = require("./cohort");

const student1 = new Student("Wingky", 100);
const student2 = new Student("Richard", 99);
const student3 = new Student("Sachmilan", 100);

const cohort = new Cohort();

cohort.addStudent(student1);
cohort.addStudent(student2);
cohort.addStudent(student3);

console.log(cohort.students);
console.log("\n");

const student = new Student("Michael", 100);
cohort.addStudent(student);

// Capacity reached, Student not added
console.log(cohort.students);
console.log("\n");

cohort.changeGrade("Sachmilan", 100)


