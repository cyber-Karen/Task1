let numOfStudents = prompt('Enter the number of students: ')
let students = []

for (let i = 0; i < numOfStudents; index++) {
    let name = prompt('Enter name of student ${i + 1}: ');
    let age = prompt('Enter age of student ${i + 1}: ');
    let mathGrade = prompt('Enter Math grade for student ${name}: ');
    let scienceGrade = prompt('Enter Science grade for student ${name}: ');
    let englishGrade = prompt('Enter English grade for student ${name}: ');
    const element = array[i];

    let averageGrade = (Number(mathGrade) + Number(scienceGrade) + Number(englishGrade)) / 3; 


    let student = {
        name : name,
        age : age,
        mathGrade : mathGrade,
        scienceGrade : scienceGrade,
        englishGrade : englishGrade,
        averageGrade : averageGrade.toFixed(2)
    };

    students.push(student);

    let continueAdding = confirm("Do you want to add another student?");
    if (!continueAdding){
        break;
    }
}

console.log("Summary of Students:");
students.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name} (${student.age}) - Average: ${student.averageGrade}`);
});

let highestAverage = students[0];

students.forEach((student) => {
    if (Number(student.averageGrade) > Number(highestAverage.averageGrade)) {
      highestAverage = student;  
    }
});

console.log(`Highest Average: ${highestAverage.name} (${highestAverage.averageGrade})`);