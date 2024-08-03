import { sum } from '../../lib/sum.js';
import { diff } from '../../lib/diff.js';
import { multi } from '../../lib/multi.js';
import { div } from '../../lib/div.js';

// import { plus as prideti, minus as atimti, star, slash } from '../../lib/math.js';
import * as matke from '../../lib/math.js';

console.log(sum(7, 5));
console.log(diff(7, 5));
console.log(multi(7, 5));
console.log(div(7, 5));

// console.log(prideti(77, 55));
// console.log(atimti(77, 55));
// console.log(star(77, 55));
// console.log(slash(77, 55));

console.log(matke.plus(77, 55));
console.log(matke.minus(77, 55));
console.log(matke.star(77, 55));
console.log(matke.slash(77, 55));