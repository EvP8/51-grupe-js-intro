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