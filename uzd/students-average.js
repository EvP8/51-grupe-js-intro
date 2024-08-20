function average(marks) {
    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;

    for (const mark of marks) {
        sum += mark
    }

    return sum / marks.length;
}

const studentList = [
    { name: 'Maryte', age: 88, marks: [10, 10, 6] },
    { name: 'Ona', age: 66, marks: [] },
    { name: 'Petras', age: 77, marks: [10, 2, 8, 4, 6] },
    { name: 'Jonas', age: 99, marks: [7, 6, 5, 4] },
];

// for (const student of studentList) {
//     student.averageMark = average(student.marks);
// }

// studentList.sort((a, b) => b.averageMark - a.averageMark);
// console.log(studentList[0]);

const betterStudents = studentList.map(
    s => ({ ...s, average: average(s.marks) })
);
console.log(betterStudents);