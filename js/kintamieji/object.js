/*
OBJECT - objektas
key-value porų sąrašas

*/

// riestiniai skliaustai
const empty = {};

const student1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const student2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    phone: 8612426,
};

const student3 = {
    name: 'Petras',
    age: 77,
    isMarried: false,
    address: 'Gatve, Miestas',
};

const student4 = {
    name: 'Ona',
    age: 66,
    isMarried: true,
    address: 'Gatve, Miestas',
    phone: 8612426,
};

// standartine sintakse
console.log(student1['name']);
console.log(student1['age']);
console.log(student1['isMarried']);

// supaprastinta sintakse
console.log(student4.name);
console.log(student4.address);
console.log(student4.age);
console.log(student4.phone);
console.log(student4.isMarried);

const cars = [
    {
        brand: 'Audi',
        model: '80',
        color: 'red',
        price: 300,
    },
    {
        brand: 'Volvo',
        model: 'S40',
        color: 'black',
        price: 1000,
    },
    {
        brand: 'Zapas',
        model: '1',
        color: 'pilkas',
        price: 777,
    },
    {
        brand: 'Ford',
        model: 'Model T',
        color: 'black',
        price: 199999,
    },
];

// Automobilis BRAND MODEL, kurio spalva yra COLOR parduodamas uz PRICE Eur.

const car1 = cars[0];
const car1Sale = 'Automobilis ' + car1.brand + ' ' + car1.model + ', kurio spalva yra ' + car1.color + ' parduodamas uz ' + car1.price + ' Eur.';
console.log(car1Sale);


const car2 = cars[1];
const car2Sale = 'Automobilis ' + car2.brand + ' ' + car2.model + ', kurio spalva yra ' + car2.color + ' parduodamas uz ' + car2.price + ' Eur.';
console.log(car2Sale);

const car3Sale = 'Automobilis ' + cars[2].brand + ' ' + cars[2].model + ', kurio spalva yra ' + cars[2].color + ' parduodamas uz ' + cars[2].price + ' Eur.';
console.log(car3Sale);

const car4Sale = 'Automobilis ' + cars[3].brand + ' ' + cars[3].model + ', kurio spalva yra ' + cars[3].color + ' parduodamas uz ' + cars[3].price + ' Eur.';
console.log(car4Sale);

/*
N.D.

Reikalingas sarasas prekiu.
Kiekviena preke yra aprasoma pavadinimu, kaina uz vieneta ir norimu pirkti kiekiu.

Reikia isspausdinti:

A) SABLONAS:
Prekiu krepselyje yra COUNT prekiu.

B) SABLONAS:
Prekiu krepselis
----------------
1) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
2) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
...
N) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS

C) SABLONAS:
Prekiu krepselio verte yra TOTAL KAINA Eur.
*/

console.clear();


"use strict";

// Prekių sąrašas

const krepselis = [
    {
        pavadinimas: 'Duona',
        kainaUzVieneta: 1.5,
        kiekis: 2,
    },
    {
        pavadinimas: 'Svietas',
        kainaUzVieneta: 2.2,
        kiekis: 1,
    },
    {
        pavadinimas: 'Sūris',
        kainaUzVieneta: 1.7,
        kiekis: 2,
    },
    {
        pavadinimas: 'Arbata',
        kainaUzVieneta: 2,
        kiekis: 3,
    },
];

// Prekių kiekio nustatymas

const prekiuSkaicius = krepselis.length;
console.log('Prekių krepšelyje yra ' + prekiuSkaicius + ' prekių.');

// B) Prekių sąrašo rodymas

console.log('Prekių krepšelis');
console.log('----------------');
console.log('1) ' + krepselis[0].pavadinimas + ' (' + krepselis[0].kainaUzVieneta.toFixed(2) + ' Eur) - ' + 
krepselis[0].kiekis);
console.log('2) ' + krepselis[1].pavadinimas + ' (' + krepselis[1].kainaUzVieneta.toFixed(2) + ' Eur) - ' + 
krepselis[1].kiekis);
console.log('3) ' + krepselis[2].pavadinimas + ' (' + krepselis[2].kainaUzVieneta.toFixed(2) + ' Eur) - ' +
krepselis[2].kiekis);
console.log('4) ' + krepselis[3].pavadinimas + ' (' + krepselis[3].kainaUzVieneta.toFixed(2) + ' Eur) - ' + 
krepselis[3].kiekis);


// C) Prekių krepšelis vertės apskaičiavimas

let prekiuKaina = krepselis [0].kainaUzVieneta * krepselis [0].kiekis +
                  krepselis [1].kainaUzVieneta * krepselis [1].kiekis +
                  krepselis [2].kainaUzVieneta * krepselis [2].kiekis +
                  krepselis [3].kainaUzVieneta * krepselis [3].kiekis;

console.log ('Prekių krepšelio vertė yra ' + prekiuKaina.toFixed(2) + 'Eur.');

console.clear();

const pc = {
    monitor: {
        width: 1980,
        height: 1080,
    },
    ram: 16,
    hd: 100,
    keyboard: "en",
    mouse: true,
    power: false,
};

const param = 'monitor';
console.log(pc['param']);

console.log(pc.monitor.width);
console.log(pc.monitor.height);
console.log(pc.monitor.width);

console.clear();




const crazy = {
    title: 'Some crazy ...😎',
    description: 'Prepare yourself... 🚗',
    'crazy marks': [10, 2, 8, 4, 6],
    123: {
        one: true,
        two: true,
        three: true,
    }
};

console.log(crazy);
console.log(crazy.title);
console.log(crazy['description']);
console.log(crazy['crazy marks']);
console.log(crazy['123']);
console.log(crazy[123]);

/*
string = supaprastintas array
array = supaprastintas object
*/
console.log(crazy.title);
console.log(crazy.title[0]);
console.log(crazy.title[1]);
console.log(crazy.title[2]);
console.log(crazy.title.length);

console.clear();

const house = {
    width: 16,
    height: 3,
    depth: 5,
};

const houseKeys = Object.keys(house);
console.log(houseKeys);

console.log(Object.keys({}));

console.clear();

// dinaminis reiksmiu priskyrimas

const zoo = {
    liutas: 2,
};
console.log(zoo.liutas);

zoo.liutas += 3;
console.log(zoo.liutas);

zoo.dramblys = 1;
console.log(zoo);

zoo.dramblys += 2;
console.log(zoo);

zoo.lape = 4;
console.log(zoo);

const marks = [10, 2, 8, 4, 6];
console.log(marks);
console.log(marks[0]);

marks[1] = 10;
console.log(marks);
console.log(marks[1])