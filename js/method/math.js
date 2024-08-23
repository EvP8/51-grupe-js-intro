console.log(Math);
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT2 * Math.SQRT2);

console.log(Math.abs(5));
console.log(Math.abs(-5));
console.log(Math.abs(0));

console.log(Math.cbrt(40) * Math.cbrt(40) * Math.cbrt(40));

console.log(Math.fround(2));
console.log(Math.fround(-2));
console.log(Math.fround(2.5));
console.log(Math.fround(2.5148562154));

console.log(Math.hypot(3, 4));

console.log(Math.imul(3, 4));
console.log(Math.imul(300, 400));

console.log(Math.pow(0, 0));
console.log(Math.pow(2, 0));
console.log(Math.pow(2, 1));
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 4));
console.log(Math.pow(2, 5));

console.log(Math.sign(5));
console.log(Math.sign(5548562));
console.log(Math.sign(0));

console.log(Math.sign(-5));
console.log(Math.sign(-5548562));
console.log(Math.sign(-0));

console.log(Math.sqrt(4));
console.log(Math.sqrt(9));
console.log(Math.sqrt(2));


// console.log(Math.ceil);
// console.log(Math.floor);
// console.log(Math.round);
// console.log(Math.trunc);

console.clear();
console.log(Math.ceil(-4));
console.log(Math.ceil(-3.999));
console.log(Math.ceil(-3.5));
console.log(Math.ceil(-3.001));
console.log(Math.ceil(-3));
console.log(Math.ceil(0));
console.log(Math.ceil(7));
console.log(Math.ceil(7.001));
console.log(Math.ceil(7.5));
console.log(Math.ceil(7.999));
console.log(Math.ceil(8));

console.clear();
console.log(Math.floor(-4));
console.log(Math.floor(-3.999));
console.log(Math.floor(-3.5));
console.log(Math.floor(-3.001));
console.log(Math.floor(-3));
console.log(Math.floor(0));
console.log(Math.floor(7));
console.log(Math.floor(7.001));
console.log(Math.floor(7.5));
console.log(Math.floor(7.999));
console.log(Math.floor(8));

console.clear();
// 0.5 apvalina i virsu
// -3.5 -> -3
// 7.5 -> 8
console.log(Math.round(-4));
console.log(Math.round(-3.999));
console.log(Math.round(-3.5));
console.log(Math.round(-3.001));
console.log(Math.round(-3));
console.log(Math.round(0));
console.log(Math.round(7));
console.log(Math.round(7.001));
console.log(Math.round(7.5));
console.log(Math.round(7.999));
console.log(Math.round(8));

console.clear();
console.log(Math.trunc(-4));
console.log(Math.trunc(-3.999));
console.log(Math.trunc(-3.5));
console.log(Math.trunc(-3.001));
console.log(Math.trunc(-3));
console.log(Math.trunc(0));
console.log(Math.trunc(7));
console.log(Math.trunc(7.001));
console.log(Math.trunc(7.5));
console.log(Math.trunc(7.999));
console.log(Math.trunc(8));

console.clear();

console.log(Math.ceil(0.5));
console.log(Math.floor(0.5));
console.log(Math.round(0.5));
console.log(Math.trunc(0.5));

// console.log(Math.max);
console.clear();

const marks = [10, 2, 8, 4, 6];

console.log(Math.max(1, 2));
console.log(Math.max(-5, 7, 3.14, -2.717));
console.log(Math.max(Infinity, -5, 7, 3.14, -2.717));

console.log(Math.max(10, 2, 8, 4, 6));
console.log(Math.max([10, 2, 8, 4, 6]));
console.log(Math.max(marks));
console.log(Math.max(...[10, 2, 8, 4, 6]));
console.log(Math.max(...marks));

// console.log(Math.min);

console.log(Math.min(1, 2));
console.log(Math.min(-5, 7, 3.14, -2.717));
console.log(Math.min(Infinity, -5, 7, 3.14, -2.717));

console.log(Math.min(10, 2, 8, 4, 6));
console.log(Math.min([10, 2, 8, 4, 6]));
console.log(Math.min(marks));
console.log(Math.min(...[10, 2, 8, 4, 6]));
console.log(Math.min(...marks));

console.clear();
// console.log(Math.random);

console.log(Math.random());