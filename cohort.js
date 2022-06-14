const Student = require("./student");

function Cohort() {
  this.students = [];
  this.capacity = 3;
}

Cohort.prototype.addStudent = function(student) {
  if (student instanceof Student === false) {
    throw new Error("Expected parameter 'student' to be an instance of student");
  }

  if (this.students.length >= this.capacity) {
    return;
  }

  this.students.push(student);
};

Cohort.prototype.changeGrade = function(name, grade) {
  const index = this.students.findIndex((student) => {
    return student.name === name;
  });

  if (index === -1) {
    return;
  }

  return this.students[index].grade = grade;
};

module.exports = Cohort;
