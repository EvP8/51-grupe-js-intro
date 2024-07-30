// *********************************
// *          Namų darbai          *
// *********************************

"use strict";
console.log("-------------------")
console.log('Prekių sąrašas ir sumos skaičiavimas');
console.log('------------------')

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

console.log('----------------');

// *********************************
// *   JavaScript mini užduotys    *
// *********************************

// Kintamųjų inicijavimas

// 1.  Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis   
//     a. Po kiekvieno jų inicijavimo, išvesti į console

console.log('Kintamieji skaičiaus tipo reikšmės');
console.log("-------------------")

const skaicius1 = 8;
console.log(skaicius1);

const skaicius2 = 88;
console.log(skaicius2);

const skaicius3 = 888;
console.log(skaicius3);

// 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//    a. Po kiekvieno jų inicijavimo, išvesti į console

console.log("-------------------")
console.log('Kintamieji skaičiaus tipo reikšmės');
console.log("-------------------")

const tekstas1 = "Pagaliau";
console.log(tekstas1);

const tekstas2 = "Sviečia";
console.log(tekstas2);

const tekstas3 = "Saulė";
console.log(tekstas3)

// 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// a. Po kiekvieno jų inicijavimo, išvesti į console

console.log("-------------------")
console.log('Sąrašas, kintamieji skaičiai');
console.log("-------------------")

const numeriuSarasas1 = [1, 2, 3, 4, 5];
console.log(numeriuSarasas1);

const numeriuSarasas2 = [11, 12, 13, 14, 15];
console.log(numeriuSarasas2);

const numeriuSarasas3 = [111, 222, 333, 444, 555];
console.log(numeriuSarasas3);

// 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// a. Po kiekvieno jų inicijavimo, išvesti į console

console.log("-------------------")
console.log('Sąrašas, kintamieji tekstai');
console.log("-------------------")

const tekstasSarasas1 = ['vienas', 'du', 'trys', 'keturi', 'penki'];
console.log(tekstasSarasas1);

const tekstasSarasas2 = ['vienuolika', 'dvylika', 'trylika', 'keturiolika', 'penkiolika'];
console.log(tekstasSarasas2);

const tekstasSarasas3 = ['šimtas vienuolika', 'du šimtai dvydešimt du', 'trys šimtai trisdešimt trys', 'keturi šimtai keturiasdešimt keturi', 'penki šimtai penkiasdešimt penki'];
console.log(tekstasSarasas3);

