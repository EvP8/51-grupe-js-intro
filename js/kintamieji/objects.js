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