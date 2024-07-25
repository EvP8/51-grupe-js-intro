/*
KINTAMUJU INICIAVIMAS
- const (default)
- let (kai reiksme turi keistis)
- var (nenaudoti, nebent zinai ka darai)
- niekaip neinicijuoti (BAN!!! 👀👀👀) (elgsis kaip var)

NUMBER (skaicius)

Kokie buna skaiciai:
- teigiami/neigiami
- sveikieji/desimtainiai
- normalus/nenormalus

Kas yra nenormalus "skaiciai"?
- NaN (skaiciaus tipo klaida)
- Infinity
- -Infinity

Operatoriai:
    - aritmetiniai: +, -, /, *, %, ++, --
    - aritmetiniai priskyrimo: +=, -=, /=, *=, %=

Operatoriu skaiciavimu vykdymo eiliskumas:
    1) *, /
    2) +, -, %
*/

console.log(1);
console.log(3.14);
console.log(0);
console.log(-1);
console.log(-3.14);

console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

const a = 5;
let b = 7;
var c = 666;
d = 13;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.clear();

const age = 99;
console.log(age);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

const marksTotal = mark1 + mark2 + mark3 + mark4 + mark5;
console.log(marksTotal);

const marksAverage = marksTotal / 5;
console.log(marksAverage);

let marksSum = 0;
console.log(marksSum);

marksSum = marksSum + mark1;
console.log(mark1, marksSum);

marksSum = marksSum + mark2;
console.log(mark2, marksSum);

marksSum = marksSum + mark3;
console.log(mark3, marksSum);

marksSum = marksSum + mark4;
console.log(mark4, marksSum);

marksSum = marksSum + mark5;
console.log(mark5, marksSum);

console.clear();

let total = 0;
console.log(total);

total = total + 100;
console.log(total);

total = total / 5;
console.log(total);

total = total - 2;
console.log(total);

total = total * 3;
console.log(total);

// dalybos liekana
// ??? = 54 % 5;
total = total % 5;
console.log(total);

const number = 54;
const div = 5;

const mod = number % div;
const integer = (number - mod) / div;

const integer2 = (number - number % div) / div;

console.log(mod);
console.log(integer);
console.log(integer2);

console.clear();

const day = 14;
const weekday = day % 7;

console.log(weekday);

/*
rez d
1 - 1   8   15
2 - 2   9   16
3 - 3   10  17
4 - 4   11  18
5 - 5   12  19
6 - 6   13  20
0 - 7   14  21
*/

console.clear();

let gg = 0;
console.log(gg);

gg = gg + 100;
console.log(gg);

gg += 100;
console.log(gg);

gg /= 5;
console.log(gg);

gg -= 10;
console.log(gg);

gg *= 3;
console.log(gg);

gg %= 7;
console.log(gg);

console.clear();

let i = 0;
console.log(i);

i = i + 1;
console.log(i);

i += 1;
console.log(i);

i++;
console.log(i);

++i;
console.log(i);

console.clear();

let m = 0;
console.log(m);     // 0
console.log(++m);   // 1
console.log(++m);   // 2
console.log(++m);   // 3
console.log(++m);   // 3
console.log(++m);   // 3
console.log(++m);   // 3
console.log(++m);   // 3
console.log(++m);   // 3
console.log(++m);   // 3
console.log(++m);   // 3

let amzius = 80;

amzius = amzius + 1;
amzius += 1;
amzius++;
++amzius;

console.clear();

let skola = 55;
console.log(skola);

skola = skola - 1;
console.log(skola);

skola -= 1;
console.log(skola);

skola--;
console.log(skola);

--skola;
console.log(skola);

console.clear();


const skaicius = 10.8;
const daliklis = 5;

const liekana = skaicius % daliklis;
const sveikasisSkaicius = (skaicius - liekana) / daliklis;

console.log(skaicius, daliklis, liekana);
console.log(skaicius, daliklis, sveikasisSkaicius);