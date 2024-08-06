/*
FOR-IN ciklas
*/

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    phone: 861485214,
    address: {
        city: 'Miestas',
        street: 'Gatve',
        number: 123,
        zip: 98765,
    },
    marks: [10, 2, 8, 4, 6],
};

// 1.
const keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(key, '-->', person[key]);
}

console.log('--------------');

// 2.
const keys2 = Object.keys(person);
for (const key of keys2) {
    console.log(key, '-->', person[key]);
}

console.log('--------------');

// 3.
for (const key in person) {
    console.log(key, '-->', person[key]);
}

console.clear();

const abc = {
    a: 'arbuzas',
    b: 'bulve',
    c: 'cukinija',
    d: 'dilgele',
};

let index = 1;
for (const key in abc) {
    console.log(`${index++}) Objekte, po raktu "${key}" yra reiksme "${abc[key]}".`);
}