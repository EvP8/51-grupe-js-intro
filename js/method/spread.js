/*
... - "spread" operatorius
... - "rest" operatorius
*/

// primityviu reiksmiu kopojavimas
// number, string, boolean
let n = 7;
let m = n;

console.log(n, m);

n = 77777;
console.log(n, m);

m = 'aaaaaaaa';
console.log(n, m);

// kompleksiniu reiksmiu kopijavimas
// array, object
const a = [1, 2];
const b = a;

console.log('a', a);
console.log('b', b);

a[0] = 111;
console.log('a', a);
console.log('b', b);

const jonas = { name: 'Jonas' };
const maryte = jonas;

console.log(jonas);
console.log(maryte);

maryte.name = 'Maryte';

console.log(jonas);
console.log(maryte);

console.clear();

// spread
const m1 = [10, 2];
const m2 = [...m1];
// const m2 = [...[10, 2]];
// const m2 = [10, 2];

console.log(m1);
console.log(m2);

m1[0] = 1000000;

console.log(m1);
console.log(m2);

const m3 = [111, 222, ...m1, 333, 444];
console.log(m3);

const n1 = [1, [1452], 11];
const n2 = [2, 22];
const n3 = [3, 33];
const n4 = [4, 44];

const n314 = [...n3, ...n1, ...n4];
console.log(n314);

console.log('---------------');

const objName = { name: 'Jonas' };
const objAge = { age: 99 };
const objIsMarried = { isMarried: true };
console.log(objName);
console.log(objAge);
console.log(objIsMarried);

const fullHouse = { ...objAge, ...objIsMarried, ...objName };
console.log(fullHouse);

const audi = {
    brand: 'Audi',
    model: '80',
};
const version = {
    color: '#ff0000',
    fuel: 'benzinas',
};

const bulka = { ...audi, ...version };
console.log(bulka);

const raudonaBulka = { ...audi, color: version.color };
console.log(raudonaBulka);

const batonas = { ...audi, version };
console.log(batonas);

const duona = { audi, version };
console.log(duona);

version.color = 'red';
console.log(batonas);
console.log(duona);