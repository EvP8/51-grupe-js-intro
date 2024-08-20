/*

Generuojamas atsakymas yra: [0..1)
Reiskia:
nulis - imtynai (galima reiksme)
vienetas - ne imtynai (negalima reiksme)
kas reiskia...
jog didziausia galima reiksme yra: 0.99999999999999

*/

let sum = 0;

for (let i = 0; i < 1_000_000; i++) {
    sum += Math.round(Math.random());
}

console.log(sum / 1_000_000);

// 0-1
// [0..1)
// [0..0.5) + [0.5..1)
// [0..0.4999999] + [0.5..0.9999999]


// 0-1-2
// [0..1)
//      0               1                   2
// [0..0.3333] + [0.3334..0.6666] + [0.6667..0.9999]
console.clear();

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('0, 1');
console.log(random(0, 1));
console.log(random(0, 1));
console.log(random(0, 1));
console.log(random(0, 1));
console.log(random(0, 1));

console.log('0, 10');
console.log(random(0, 10));
console.log(random(0, 10));
console.log(random(0, 10));
console.log(random(0, 10));
console.log(random(0, 10));

console.log('5, 10');
console.log(random(5, 10));
console.log(random(5, 10));
console.log(random(5, 10));
console.log(random(5, 10));
console.log(random(5, 10));

console.log('100, 200');
console.log(random(100, 200));
console.log(random(100, 200));
console.log(random(100, 200));
console.log(random(100, 200));
console.log(random(100, 200));