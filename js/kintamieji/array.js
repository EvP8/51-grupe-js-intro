/*
ARRAY - sąrašas, masyvas, matrica, list'as, arėjus
*/

// laužtyniai skliaustai
const empty = [];
console.log(empty);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const studentNames = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentNames);

const mixList = [
    1,
    'a',
    true,
    [],
    [2, 3, 4],
    ['b', 'c', 'd'],
    [false, true, false]
];

const marksCount = marks.length;
console.log(marksCount);

const nameCount = studentNames.length;
console.log(nameCount);

console.log('----------------');
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

console.log(marks[5]);
console.log(marks[3.5]);
console.log(marks[-3.5]);
console.log(marks[-3]);

console.clear();

const dictionary = ['Labas', 'rytas', 'Lietuva'];

const word1 = dictionary[0];
console.log(word1);

const letter1 = word1[0];
console.log(letter1);

const letter11 = dictionary[0][0];
console.log(letter11);

const letter21 = dictionary[1][0];
console.log(letter21);

console.clear();

const pazymiai = [10, 2, 8, 4, 6, 7];

// koks pazymiu vidurkis?
const suma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4] + pazymiai[5];
const kiekis = pazymiai.length;
const vidurkis = suma / kiekis;

console.log('Suma:', suma);
console.log('Kiekis:', kiekis);
console.log('Vidurkis:', vidurkis);

console.log('----------------');
let tempSuma = 0;
let index = 0;

tempSuma += pazymiai[index++];
tempSuma += pazymiai[index++];
tempSuma += pazymiai[index++];
tempSuma += pazymiai[index++];
tempSuma += pazymiai[index++];
tempSuma += pazymiai[index++];

console.log(index, tempSuma, tempSuma / pazymiai.length);

console.clear();

//                0      1        2
const colors = ['red', 'green', 'blue'];

// Lovely color: red, green, blue!
let colorsStr = 'Lovely color: ';
let colorIndex = 0;
console.log(colorsStr);

colorsStr += colors[colorIndex++] + ', ';
console.log(colorsStr);

colorsStr += colors[colorIndex++] + ', ';
console.log(colorsStr);

colorsStr += colors[colorIndex++] + '!';
console.log(colorsStr);