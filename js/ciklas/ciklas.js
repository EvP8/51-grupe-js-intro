/*
FOR - standartinis (tevinis) ciklas (pasikartojanti seka)
*/

console.log('START');

for (let i = 10; i < 15; i = i + 1) {
    console.log(i);
}

console.log('END');

const dict = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

let index = 0;
console.log((index + 1) + ') ' + dict[index]);
index++;
console.log((index + 1) + ') ' + dict[index]);
index++;
console.log((index + 1) + ') ' + dict[index]);
index++;

console.log('---------');

for (let i = 0; i < dict.length; i++) {
    console.log((i + 1) + ') ' + dict[i]);
}

// 😈

console.clear();

function arTesti(index) {
    if (index > 35) {
        return false;
    }

    return true;
}

let j = 20;

for (; arTesti(j);) {
    if (j < 25) {
        console.log('--', j);
    } else {
        console.log('+++++', j);
    }

    j++;
}

console.clear();

//           i: 0  1  2  3  4
const marks = [10, 2, 8, 4, 6, 777];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    console.log(i, '-->', marks[i]);
    sum += marks[i];
}

for (let i = marks.length - 1; i >= 0; i--) {
    console.log('>>>', marks[i]);
}