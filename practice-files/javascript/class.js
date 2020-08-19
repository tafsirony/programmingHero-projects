class Student {
  constructor(id,name) {
    this.id = id;
    this.name = name;
  }
}
const student1 = new Student(12,"ony");
const student2 = new Student(24,"khan");

console.log(student1, student2);
console.log(student1.id);
