/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

console.log(String.prototype.at);
const str1 = 'Pomidoras';
console.log(str1.at(Infinity), str1[Infinity]);
console.log(str1.at(0), str1[0]);
console.log(str1.at(1), str1[1]);
console.log(str1.at(2), str1[2]);
console.log(str1.at(3), str1[3]);

console.log(str1.at(3.1), str1[3.1]);
console.log(str1.at(3.5), str1[3.5]);
console.log(str1.at(3.9), str1[3.9]);
console.log(str1.at(-3.1), str1[-3.1]);
console.log(str1.at(-3.5), str1[-3.5]);
console.log(str1.at(-3.9), str1[-3.9]);

console.log(str1.at(4), str1[4]);
console.log(str1.at(-1), str1[str1.length - 1]);
console.log(str1.at(-2), str1[str1.length - 2]);
console.log(str1.at(-3), str1[str1.length - 3]);
console.log(str1.at(-4), str1[str1.length - 4]);

console.log(String.prototype.charAt);

const str2 = 'Agurkas';
console.log(str2.charAt(Infinity), str2[Infinity]);
console.log(str2.charAt(0), str2[0]);
console.log(str2.charAt(1), str2[1]);
console.log(str2.charAt(2), str2[2]);
console.log(str2.charAt(3), str2[3]);
console.log(str2.charAt(3.1), str2[3.1]);
console.log(str2.charAt(3.5), str2[3.5]);
console.log(str2.charAt(3.9), str2[3.9]);
console.log(str2.charAt(-3.1), str2[-3.1]);
console.log(str2.charAt(-3.5), str2[-3.5]);
console.log(str2.charAt(-3.9), str2[-3.9]);
console.log(str2.charAt(4), str2[4]);
console.log(str2.charAt(-1), str2[str2.length - 1]);
console.log(str2.charAt(-2), str2[str2.length - 2]);
console.log(str2.charAt(-3), str2[str2.length - 3]);
console.log(str2.charAt(-4), str2[str2.length - 4]);

console.log(String.prototype.charCodeAt);

const str3 = 'Svogunas';
console.log(str3.charCodeAt(0), str3[0]);
console.log(str3.charCodeAt(1), str3[1]);
console.log(str3.charCodeAt(2), str3[2]);
console.log(str3.charCodeAt(3), str3[3]);
console.log(str3.charCodeAt(4), str3[4]);
console.log(str3.charCodeAt(5), str3[5]);
console.log(str3.charCodeAt(6), str3[6]);
console.log(str3.charCodeAt(7), str3[7]);
console.log(str3.charCodeAt(8), str3[8]);
console.log('-----');
console.log('A', 'A'.charCodeAt(0));
console.log('B', 'B'.charCodeAt(0));
console.log('C', 'C'.charCodeAt(0));
console.log('Z', 'Z'.charCodeAt(0));
console.log('a', 'a'.charCodeAt(0));
console.log('b', 'b'.charCodeAt(0));
console.log('c', 'c'.charCodeAt(0));
console.log('z', 'z'.charCodeAt(0));

console.log('A' > 'a');
console.log('A' < 'a');
console.log('Z' < 'a');
console.log('A' < 'B');
console.log('a' < 'b');
console.log('baa' < 'bbb');
console.log('bca' < 'bbb');

console.log(String.fromCharCode);

for (let i = 97; i <= 122; i++) {
    console.log(i, String.fromCharCode(i));
}

console.log(String.prototype.concat);
console.log('labas' + 'rytas' + 'Lietuva' + 'sakau' + 'tau');
console.log('labas'.concat('rytas'));
console.log('labas'.concat('rytas', ' ', 'Lietuva'));
console.log('labas'.concat('rytas', ' ', 'Lietuva', ' ', 'sakau'));
console.log('labas'.concat('rytas', ' ', 'Lietuva', ' ', 'sakau', ' ', 'tau'));

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log('Labas' + names);
console.log('Labas'.concat(names));
console.log('Labas'.concat(...names));
console.log('Labas'.concat(names[0], names[1], names[2], names[3]));

let concatedNames = 'Labas';
for (const name of names) {
    concatedNames += name;
}
console.log(concatedNames);

console.clear();

console.log(String.prototype.startsWith);
console.log('Labas'.startsWith('A'));
console.log('Labas'.startsWith('a'));
console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('Lb'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Lab'));
console.log('Labas'.startsWith('Laba'));
console.log('Labas'.startsWith('Labas'));

console.log(String.prototype.endsWith);
console.log('Labas'.endsWith('X'));
console.log('Labas'.endsWith('L'));
console.log('Labas'.endsWith('sa'));
console.log('Labas'.endsWith('s'));
console.log('Labas'.endsWith('as'));
console.log('Labas'.endsWith('bas'));
console.log('Labas'.endsWith('abas'));
console.log('Labas'.endsWith('Labas'));

console.log('-------');

function isQuestion(str) {
    return str.endsWith('?');
}

console.log(isQuestion('Labas'));
console.log(isQuestion('Ka tu'));
console.log(isQuestion('Ka tu?'));

// N.D. - vardo (bendraties forma) konvertavimas
// i jo "kreipinio" forma
// Pvz.: Ona -> "Sveiki, Ona!"
// Pvz.: Onutė -> "Sveiki, Onute!"
// Pvz.: Jonas -> "Sveiki, Jonai!"

console.log(String.prototype.includes);
console.log('Labas'.includes('X'));
console.log('Labas'.includes('c'));
console.log('Labas'.includes('a'));
console.log('Labas'.includes('b'));
console.log('Labas'.includes('ab'));
console.log('Labas'.includes('ba'));
console.log('Labas'.includes('Lab'));
console.log('Labas'.includes('bas'));

console.log(String.prototype.indexOf);
console.log('Labas'.indexOf('X'));
console.log('Labas'.indexOf('c'));
console.log('Labas'.indexOf('a'));
console.log('Labas'.indexOf('b'));
console.log('Labas'.indexOf('ab'));
console.log('Labas'.indexOf('ba'));
console.log('Labas'.indexOf('Lab'));
console.log('Labas'.indexOf('bas'));

console.log('vasara'.indexOf('a', 0));
console.log('vasara'.indexOf('a', 2));
console.log('vasara'.indexOf('a', 4));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));
console.log('Pomidoras'.indexOf('o', 3));
console.log('Pomidoras'.indexOf('o', 4));
console.log('Pomidoras'.indexOf('o', 5));
console.log('Pomidoras'.indexOf('o', 6));

console.log(String.prototype.repeat);

function repeatText(str, count) {
    let result = '';

    for (let i = 0; i < count; i++) {
        result += str;
    }

    return result;
}

console.log('Labas'.repeat(0));
console.log(repeatText('Labas', 0));
console.log('Labas'.repeat(1));
console.log(repeatText('Labas', 1));
console.log('Labas'.repeat(2));
console.log(repeatText('Labas', 2));
console.log('Labas'.repeat(3));
console.log(repeatText('Labas', 3));
console.log('Labas'.repeat(10));
console.log(repeatText('Labas', 10));