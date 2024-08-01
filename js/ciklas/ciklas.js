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

let j = 20;

for (; j < 30;) {
    if (j < 25) {
        console.log('--', j);
    } else {
        console.log('+++++', j);
    }

    j++;
}