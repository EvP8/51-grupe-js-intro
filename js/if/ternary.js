/*
UNARY - vieno operatoriaus
    const x = 5;
BINARY - dvieju operatoriu
    const y = x + 7;
TERNARY - triju operatoriu
    const gg = klausimas ? pozityvas : negatyvas;
*/

const age = 100;
const ageLimit = 18;
const msgOk = 'Valio! Turi pakankamai metu!';
const msgErr = 'Ups! Palauk dar metus kitus!';

let msg = '';

if (age >= ageLimit) {
    msg = msgOk;
} else {
    msg = msgErr;
}

console.log('Message:', msg);

const msg2 = age >= ageLimit ? msgOk : msgErr;

console.log('Message:', msg2);

console.clear();

const a = 1 > 2
    ? 3
    : 4;
console.log(a);

const b = 1 < 2
    ? 3
    : 4;
console.log(b);

const c = 1 ? 2 : 3;
console.log(c);

const d = -1 ? -2 : -3;
console.log(d);

const e = 0 ? 1 : 2;
console.log(e);

const f = 0
    ? 1
    : 2
        ? 3
        : 4;
console.log(f);

const g = 2
    ? 1
    : 0
        ? -1
        : -2;
console.log(g);

const h = 1
    ? 2
        ? 3
        : 4
    : 5;
console.log(h);

const i = 0 ? 1 ? 2 : 3 : 4 ? 5 : 6;
console.log(i);

/* eilė arba kolona */