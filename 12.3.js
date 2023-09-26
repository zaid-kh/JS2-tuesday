const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["history", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 4,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson(id, type) {
    if (type === "teacher") {
      return this.teachers.find((t) => t.id === id);
    } else if (type === "student") {
      return this.students.find((s) => s.id === id);
    } else
      console.log("Wrong person type!, Type can be 'teacher' or 'student'");
    return;
  },
  assignStudent(id, subject) {
    // get first teacher with matching subject + vacancy >0
    const vacant = this.teachers.filter((t) => t.capacityLeft > 0);
    let teacher = vacant.find((t) => t.subjects.find((s) => s === subject));
    if (teacher == null) {
      console.log("Sorry, no available teachers left");
    }
    // add student to array in teacher and decrease capacity
    else {
      teacher.students.push(id);
      teacher.capacityLeft--;
    }
  },
  assignTeachersSubject(id, subject) {
    // getTeacher > if subject !found in subjects[] > add subject
    let teacher = this.findPerson(id, "teacher");
    if (teacher.subjects.find((s) => s === subject)) {
      console.log(
        `Error: Subject ${subject} is already taught by ${teacher.name}`
      );
    } else {
      teacher.subjects.push(subject);
      console.log(`Subject ${subject} added to teacher ${teacher.name}.`);
    }
  },
};

console.log(school.findPerson(1, "teacher")); // find a teacher
console.log(school.findPerson(13, "student")); // find a student
school.assignStudent(13, "history"); // assign student to a subject
console.log(school.findPerson(1, "teacher")); // observing changes
console.log(school.findPerson(2, "teacher")); // observing changes
school.assignTeachersSubject(2, "Geography"); // assign new subject
school.assignTeachersSubject(2, "Geography"); // assign subject that exists
console.log(school.findPerson(2, "teacher").subjects); // observing changes
