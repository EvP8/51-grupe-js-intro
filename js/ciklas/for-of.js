/*
FOR-OF ciklas
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const names = ['Jonas', 'Maryte', 'Petras', 'Ona', 'Chuck', 'Liusi', 'Batman', 'Tom', 'Jerry', 'Xena'];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(`Sveiki, mano vardas yra ${name}!`);
}

const darzoves = ['bulve', 'pomidoras', 'agurkas', 'svogunas', 'cesnakas', 'morka', 'burokelis', 'ridikelis', 'salota', 'kopustas'];

for (const darzove of darzoves) {
    console.log(`As auginu: ${darzove}.`);
}

// paskutine trumpiausio pavadinimo darzove -> morka
let shortVeg = darzoves[0];

for (const veg of darzoves) {
    if (veg.length <= shortVeg.length) {
        shortVeg = veg;
    }
}

console.log(shortVeg);

// pirma ilgiausios pavadinimo darzove ->

let longVeg = darzoves[0];

for (const veg of darzoves) {
    if (veg.length > longVeg.length) {
        longVeg = veg;
    }
}

console.log(longVeg);

// pirma darzove kurios pavadinimas prasideda "s" raide
let sRatedVeg = '';

for (const veg of darzoves) {
    if (veg[0] === 's') {
        sRatedVeg = veg;
        break;
    }
}

console.log(sRatedVeg);