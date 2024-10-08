// *********************************
// *          Namų darbai          *
// *********************************

"use strict";
console.log("-------------------");
console.log('Prekių sąrašas ir sumos skaičiavimas');
console.log('------------------');

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

console.log("");
console.log("-------------------");
console.log('*********************************');
console.log('*   JavaScript mini užduotys    *');
console.log('*********************************');
console.log("-------------------");

// Kintamųjų inicijavimas

// 1.  Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis   
//     a. Po kiekvieno jų inicijavimo, išvesti į console

console.log("");
console.log("-------------------");
console.log('Kintamieji skaičiaus tipo reikšmės');
console.log("-------------------");

const skaicius1 = 8;
console.log(skaicius1);

const skaicius2 = 88;
console.log(skaicius2);

const skaicius3 = 888;
console.log(skaicius3);

// 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//    a. Po kiekvieno jų inicijavimo, išvesti į console

console.log("-------------------");
console.log('Kintamieji skaičiaus tipo reikšmės');
console.log("-------------------");

const tekstas1 = "Pagaliau";
console.log(tekstas1);

const tekstas2 = "Sviečia";
console.log(tekstas2);

const tekstas3 = "Saulė";
console.log(tekstas3)

// 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//    a. Po kiekvieno jų inicijavimo, išvesti į console

console.log("-------------------");
console.log('Sąrašas, kintamieji skaičiai');
console.log("-------------------");

const numeriuSarasas1 = [1, 2, 3, 4, 5];
console.log(numeriuSarasas1);

const numeriuSarasas2 = [11, 12, 13, 14, 15];
console.log(numeriuSarasas2);

const numeriuSarasas3 = [111, 222, 333, 444, 555];
console.log(numeriuSarasas3);

// 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//    a. Po kiekvieno jų inicijavimo, išvesti į console

console.log("-------------------");
console.log('Sąrašas, kintamieji tekstai');
console.log("-------------------");

const tekstasSarasas1 = ['vienas', 'du', 'trys', 'keturi', 'penki'];
console.log(tekstasSarasas1);

const tekstasSarasas2 = ['vienuolika', 'dvylika', 'trylika', 'keturiolika', 'penkiolika'];
console.log(tekstasSarasas2);

const tekstasSarasas3 = ['šimtas vienuolika', 'du šimtai dvydešimt du', 'trys šimtai trisdešimt trys', 'keturi šimtai keturiasdešimt keturi', 'penki šimtai penkiasdešimt penki'];
console.log(tekstasSarasas3);

// *********************************
// *   Veiksmai su kintamaisiais   *
// *********************************

// 1. Susumuoti visus skaičiaus tipo kintamuosius
//    a.  Rezultatą išvesti į console

console.log("-------------------");
console.log('Susumuoti visus skaičiaus tipo kintamuosius');
console.log("-------------------");

const viso = skaicius1 + skaicius2 + skaicius3;
console.log(viso);

// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
//    a. Rezultatą išvesti į console

console.log("-------------------");
console.log('Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas');
console.log("-------------------");

const sujungtasTekstas = tekstas1 + " " + tekstas2 + " " + tekstas3;

console.log(sujungtasTekstas);

// 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//    a. 1-2+3-4+5
//    b. Rezultatą išvesti į console

console.log("-------------------");
console.log('Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką') 
console.log('1-2+3-4+5');
console.log("-------------------");

const verte1 = numeriuSarasas1[0] - numeriuSarasas1[1] + numeriuSarasas1[2] - numeriuSarasas1[3] + numeriuSarasas1[4]
console.log(verte1);

const verte2 = numeriuSarasas2[0] - numeriuSarasas2[1] + numeriuSarasas2[2] - numeriuSarasas2[3] + numeriuSarasas2[4]
console.log(verte2);

const verte3 = numeriuSarasas3[0] - numeriuSarasas3[1] + numeriuSarasas3[2] - numeriuSarasas3[3] + numeriuSarasas3[4]
console.log(verte3);

//4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

console.log(" ");
console.log("-------------------");
console.log(' Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas');
console.log("-------------------");

console.log("");
const sujTek1 = tekstasSarasas1[4] + ', ' + tekstasSarasas1[3] + ', ' + tekstasSarasas1[2] + ', ' + tekstasSarasas1[1] + ', ' + tekstasSarasas1[0];
console.log(sujTek1);

console.log("");
const sujTek2 = tekstasSarasas2[4] + ', ' + tekstasSarasas2[3] + ', ' + tekstasSarasas2[2] + ', ' + tekstasSarasas2[1] + ', ' + tekstasSarasas2[0];
console.log(sujTek2);

console.log("");
const sujTek3 = tekstasSarasas3[4] + ', ' + tekstasSarasas3[3] + ', ' + tekstasSarasas3[2] + ', ' + tekstasSarasas3[1] + ', ' + tekstasSarasas3[0];
console.log(sujTek3);

console.log("-------------------");

// *********************************
// *     Kintamųjų palyginimas     *
// *********************************

console.log(" ")
console.log("-------------------");
console.log('Kintamųjų palyginimas');
console.log("-------------------");

//Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
//Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

// 1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
//    a. kuris didesnis
//    b. kuris mažesnis
//    c. ar jie lygūs
//    d. ar jie nelygūs
//    e. kuris didesnis arba lygus
//    f. kuris mažesnis arba lygus  

console.log(" ")
console.log("-------------------");
console.log('1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:');
console.log("-------------------");

const taip = 8;
const  ne  = 4;

if (8 > 4) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (8 < 4) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (8 === 4) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (8 !== 4) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (8 >= 4) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (8 <= 4) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// 2. Išvesti teksto tipo kintamųjų ilgius

console.log(" ")
console.log("-------------------");
console.log('2. Išvesti teksto tipo kintamųjų ilgius');
console.log("-------------------");

const name    = 'Vardenis';
const surname = "Pavardenis";

console.log(name.length);
console.log(surname.length);

// 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
//    a. kuris didesnis
//    b. kuris mažesnis
//    c. ar jie lygūs
//    d. ar jie nelygūs
//    e. kuris didesnis arba lygus
//    f. kuris mažesnis arba lygus

console.log(" ");
console.log("-------------------");
console.log('3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:');
console.log("-------------------");

if (name > surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (name < surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (name === surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (name !== surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (name >= surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (name <= surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// 4. Išvesti sąrašo tipo kintamųjų ilgius

console.log(" ");
console.log("-------------------");
console.log('4. Išvesti sąrašo tipo kintamųjų ilgius');
console.log("-------------------");

const marks = [8, 6 ,3 ,7, 2, 5];
const count = marks.length;
console.log('Kiekis', count);

const marks2 = [1, 4 ,8 ,0, 7, 5,];
const count2 = marks2.length;
console.log('Kiekis', count2);

//5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
//   a. kuris didesnis
//   b. kuris mažesnis
//   c. ar jie lygūs
//   d. ar jie nelygūs
//   e. kuris didesnis arba lygus
//   f. kuris mažesnis arba lygus

console.log(" ");
console.log("-------------------");
console.log('5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:');
console.log("-------------------");

if (marks > marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart');
}

if (marks < marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart');
}

if (marks === marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart');
}

if (marks !== marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart');
}

if (marks >= marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart');
}

if (marks <= marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kart');
}

/* *********************************
   *   Ciklo for panaudojimas  *
   ********************************* */

/* 1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
      a. 0...0
      b. 0...4
      c. 0...100
      d. 574...815
      e. -50...50
      f. -70...30 */

console.log(" ");
console.log("-------------------");
console.log('Ciklo for panaudojimas');
console.log("-------------------");

console.log("-------------------");
console.log('1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai)');
console.log('a. 0...0');
console.log('a. 0...4');
console.log('a. 574...815');
console.log('a. -50...50');
console.log('a. -70...30');
console.log("-------------------");




function rangeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

console.log(rangeSum(0, 0), '-->', 0);       
console.log(rangeSum(0, 4), '-->', 10);      
console.log(rangeSum(0, 100), '-->', 5050);    
console.log(rangeSum(574, 815), '-->', 168069);   
console.log(rangeSum(-50, 50), '-->', 0);    
console.log(rangeSum(-70, 30), '-->', -2020);

/* 2. Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo
      a. pvz.:"abcdef" -> "fedcba" */

console.log("-------------------");
console.log('2. Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo');
console.log('a. pvz.:"abcdef" -> "fedcba"');
console.log("-------------------");

function stringReverse(str) {
    let reversedString ='';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString = str[i] + reversedString;
    }
    return reversedString;
}
console.log(stringReverse(''));
console.log(stringReverse('abcdef'), '-->', 'fedcba');

 
/* 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai: 
      a. 0 - 11
      b. 8 - 31
      c. -18 - 18
      d. rezultatą pateikti tokiu formatu: 
           i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.*/
           
console.log("");
console.log("-------------------");
console.log('3. Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo');
console.log('a. 0 - 11');
console.log("-------------------");

let dalijasiIs3 = 0;
let dalijasiIs5 = 0;
let dalijasiIs7 = 0;

for (let i = 0; i <= 11; i++) {
    if (i % 3 === 0) {
        dalijasiIs3++;
    }

    if (i % 5 === 0) {
        dalijasiIs5++;
    }
    
    if (i % 7 === 0) {
        dalijasiIs7++;
    }
}

console.log(`Dalijasi iš 3: ${dalijasiIs3}`);
console.log(`Dalijasi iš 5: ${dalijasiIs5}`);
console.log(`Dalijasi iš 7: ${dalijasiIs7}`);

console.log("");
console.log("-------------------");
console.log('b. 8 - 31');
console.log("-------------------");

/*let*/ dalijasiIs3 = 0;
/*let*/ dalijasiIs5 = 0;
/*let*/ dalijasiIs7 = 0;

for (let i = 8; i <= 31; i++) {
    if (i % 3 === 0) {
        dalijasiIs3++;
    }

    if (i % 5 === 0) {
        dalijasiIs5++;
    }

    if (i % 7 === 0) {
        dalijasiIs7++;
    }
}
    console.log (`Dalinasi iš 3: ${dalijasiIs3}`)
    console.log (`Dalijasi iš 5: ${dalijasiIs5}`)
    console.log (`Dalijasi iš 7: ${dalijasiIs7}`)

    console.log("");
    console.log("-------------------");
    console.log('c. -18 - 18');
    console.log("-------------------");

/*let*/ dalijasiIs3 = 0;
/*let*/ dalijasiIs5 = 0;
/*let*/ dalijasiIs7 = 0;

for (let i = -18; i <= -18; i++) {
    if ( i % 3 === 0) {
        dalijasiIs3++;
    }
    if (i % 5 === 0) {
        dalijasiIs5++;
    }
    if (i % 7 === 0) {
        dalijasiIs7++;    }
}

    console.log (`Dalijasi iš 3: ${dalijasiIs3}`)
    console.log (`Dalijasi iš 5: ${dalijasiIs5}`)
    console.log (`Dalijasi iš 7: ${dalijasiIs7}`)

/* d. rezultatą pateikti tokiu formatu:
            i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
            ii. Skaičių internavale tarp 0 ir 11, besidalijančių be liekanos 5 yra 3 vienetai.
            iii. skaičių intervale tarp 0 ir 11, besidalijančių be liekanos 7 yra 2 vienetai. */

    console.log("");
console.log("-------------------");
console.log('d. rezultatą pateikti tokiu formatu:');
console.log('i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.');
console.log("-------------------");

