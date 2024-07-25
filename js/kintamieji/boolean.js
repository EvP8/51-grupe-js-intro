/*
BOOLEAN - logine reiksme
true / false

Interpretavimas:
true -> 1
false -> 0

Operatoriai:
&& - AND (ir) turi pirmenybe prie ||
|| - OR (arba)
*/

const arSvieciaSaule = true;
const arNaktis = false;
const arPilnametis = false;

console.log(arSvieciaSaule);
console.log(arNaktis);
console.log(arPilnametis);

const a = true + true;
console.log(a);

const b = false + false;
console.log(b);

const c = true + false;
console.log(c);

const keturi = (true + true) * (true + true);
console.log(keturi);

const devyni = (true + true + true) * (true + true + true);
console.log(devyni);


console.clear();

console.log(true);
console.log(false);
console.log('--------');
console.log(true && true, true * true);
console.log(true && false, true * false);
console.log(false && true, false * true);
console.log(false && false, false * false);
console.log('--------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('--------');
console.log(true && true && true);
console.log(true && true && false);
console.log(true && false && true);
console.log(false && true && true);
console.log(false && false && true);
console.log(false && true && false);
console.log(true && false && false);
console.log(false && false && false);
console.log('--------');
console.log(true || true || true);
console.log(true || true || false);
console.log(true || false || true);
console.log(false || true || true);
console.log(false || false || true);
console.log(false || true || false);
console.log(true || false || false);
console.log(false || false || false);
console.log('--------');
console.log(true && true || true);
console.log(true && true || false);
console.log(true && false || true);
console.log(false && true || true);
console.log(false && false || true);
console.log(false && true || false);
console.log(true && false || false);
console.log(false && false || false);
console.log('--------');
console.log(true || true && true);
console.log(true || true && false);
console.log(true || false && true);
console.log(false || true && true);
console.log(false || false && true);
console.log(false || true && false);
console.log(true || false && false);
console.log(false || false && false);
// console.log('--------');

console.log(true && true && true && true);