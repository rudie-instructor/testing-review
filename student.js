function Student(name, grade) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
  
    if (typeof grade !== "number" || isNaN(grade) || grade < 0) {
      throw new Error("Expected parameter 'grade' to be a non-negative number");
    }
  
    this.name = name;
    this.grade = grade;
  };
  
  module.exports = Student;
  