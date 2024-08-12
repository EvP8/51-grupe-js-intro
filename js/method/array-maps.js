
console.log(Array.prototype.map);
const a = [10, 2, 8, 4, 6];
console.log(a);

const a2 = a.map(n => n * 2);
console.log(a2);

const a3 = a.map(n => n + 3);
console.log(a3);

const a32 = a.map((n) => n + 3);
console.log(a32);

const a33 = a.map((n) => { return n + 3; });
console.log(a33);

const a34 = a.map(function (n) { return n + 3; });
console.log(a34);

function plusThree(n) {
    return n + 3;
}
const a35 = a.map(plusThree);
console.log(a35);

const beforeMap = [];
for (const number of a) {
    beforeMap.push(plusThree(number));
}
console.log(beforeMap);

const names = [
    'Jonas Jonaitis',
    'Maryte Marytaite',
    'Petras Petraitis',
    'Ona Onaite',
];

// 1 -----------------------
const abbr = [];

for (const name of names) {
    const words = name.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0] + '.';
    }

    abbr.push(words.join(''));
}

console.log(abbr);

// 2 -----------------------
const abbr2 = [];

for (const name of names) {
    abbr2.push(
        name
            .split(' ')
            .map(word => word[0] + '.')
            .join('')
    );
}
console.log(abbr2);

// 3 -----------------------
const abbr3 = names.map(
    name => name
        .split(' ')
        .map(word => word[0] + '.')
        .join(''));

console.log(abbr3);

/*

Kaip is pilno vardo yra gaunami inicialai?

Inicialai yra zodziu pirmos raides prie kuriu yra prideti taskai.

Pilnas vardas isskaidomas atskirais zodziais.
Is kiekvieno zodzio pasiliekama tik pirma raide.
Po kiekvieno simbolio pridedam po taska.
Viska sujungiam.

1)
'Jonas Jonaitis'

2) split(' ')
['Jonas', 'Jonaitis']

3) for() {} + ([0]+'.')
['J.', 'J.']

4) join('')
'J.J.'

*/