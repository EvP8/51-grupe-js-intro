/*
IF (palyginimas)

SABLONAI:
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} else {}
if () {} ... else if {} ...
if () {} ... else if {} ... else {}

PALYGINIMO OPERATORIAI:
visi: >, <, >=, <=, ==, !=, ===, !==
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=
*/

console.log('START');

// IF
if (5 * 7 === 35) {
    console.log('yes');
}

// IF-ELSE
if (4 > 2) {
    console.log('logika... kai if-true');
} else {
    console.log('logika... kai if-false');
}

console.log('END');
console.log('------------');

const diena = 8;
let dienosPavadinimas = '---';

if (diena === 1) {
    dienosPavadinimas = 'Pirmadienis';
} else if (diena === 2) {
    dienosPavadinimas = 'Antradienis';
} else if (diena === 3) {
    dienosPavadinimas = 'Treciadienis';
} else if (diena === 4) {
    dienosPavadinimas = 'Ketvirtadienis';
} else if (diena === 5) {
    dienosPavadinimas = 'Penktadienis';
} else if (diena === 6) {
    dienosPavadinimas = 'Sestadienis';
} else if (diena === 7) {
    dienosPavadinimas = 'Sekmadienis';
} else {
    dienosPavadinimas = 'Tokia savaites diena neegzistuoja :(';
}

console.log(dienosPavadinimas);

console.clear();

// tikrina tik verte (reiksme)
if (4 == '4') {
    console.log('TAIP');
} else {
    console.log('NE');
}

// pirmiausia tikrina duomens tipa
// jei tipai sutampa, tada tikrina verte (reiksme)
if (4 === '4') {
    console.log('TAIP');
} else {
    console.log('NE');
}

if (0 == '') {
    console.log('TAIP');
} else {
    console.log('NE');
}