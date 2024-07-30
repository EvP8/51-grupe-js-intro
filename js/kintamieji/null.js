/*

Abu reiskia reiksmes nebuvima/nezinojima.

null - is pradziu as (programuotojas) nezinau, bet ketinu suzinoti
undefined - paaiskeja kodo vykdymo metu
*/

const person = {
    name: 'Jonas',
};

console.log(person.name);
console.log(person.age);

// nil, LTU: nulis (skaicius)
let address = null;
console.log(address);
console.log(address);

address = 'Gatve, Miestas';
console.log(address);

const marks = [10, 2, 8, 4, 6];

let sum = 0;
console.log(sum);

sum += marks[0];
console.log(sum);

sum += marks[1];
console.log(sum);