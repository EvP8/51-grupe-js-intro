const marks = [-1, 10, 100, 2, 3.14, 8, 'desimt', true, 4, [10, 2, 8, 4, 6], 6, NaN, Infinity, {}];

const validMarks = [];

for (const mark of marks) {
    if (!Number.isInteger(mark)
        || mark < 1
        || mark > 10
    ) {
        continue;
    }

    validMarks.push(mark);
}

console.log(validMarks);

const validMarks2 = marks
    .filter(mark => typeof mark === 'number')
    .filter(mark => !isNaN(mark))
    .filter(mark => isFinite(mark))
    .filter(mark => mark % 1 === 0)
    .filter(mark => mark > 0)
    .filter(mark => mark <= 10);
console.log(validMarks2);

const validMarks3 = marks
    .filter(mark => Number.isInteger(mark))
    .filter(mark => mark > 0)
    .filter(mark => mark <= 10);
console.log(validMarks3);

const validMarks4 = marks
    .filter(mark =>
        Number.isInteger(mark)
        && mark > 0
        && mark <= 10
    );
console.log(validMarks4);