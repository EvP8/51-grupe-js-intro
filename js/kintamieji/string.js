/*
STRING - tekstas, simboliu grandinele

String iniciavimo simboliai:
    - ' (vienguba kabute)
    - " (dviguba kabute)

Operatoriai:
+ sujungia string'us
\ (escape) eskeipiname - funkcini simboli paverciame i spausdintina

Savybes:
.length - grazina tekste simboliu kieki (ilgi)

Interpretavimas:
- tuscias string - false
- ne tuscias string - true
*/

const single = 'Labas rytas, Lietuva!';
console.log(single);

const double = "Labas rytas, Lietuva!";
console.log(double);

// Vienguba (') kabute.
const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

// Dviguba (") kabute.
const kabute2 = 'Dviguba (") kabute.';

const name = 'Chuck';
const surname = 'Norris';
const fullname = name + ' ' + surname;
console.log(name);
console.log(surname);
console.log(fullname);

// My name is not Chuck Norris, but I like it!
const chuck = 'My name is not ' + name + ' ' + surname + ', but I like it!';
console.log(chuck);

// Vienguba (') ir dviguba (") kabutes.
const kabute12 = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(kabute12);

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabute12_3 = "Vienguba (\') ir dviguba (\") kabutes.";
const kabute12_4 = 'Vienguba (\') ir dviguba (\") kabutes.';

console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);
console.log(kabute12_4);

// Back-slash (\) simbolis.
const backSlash1 = 'Back-slash (\\) simbolis.';
const backSlash2 = "Back-slash (\\) simbolis.";
console.log(backSlash1);
console.log(backSlash2);

console.clear();

const empty1 = '';
const empty2 = "";
console.log(empty1.length);
console.log(empty2.length);

const hi = 'Pomidoras';
const hiSize = hi.length;

// Teksto "<TEKSTAS>" ilgis yra <ILGIS> simboliu.
const textSize1 = 'Teksto "' + hi + '" ilgis yra ' + hi.length + ' simboliu.';
const textSize2 = 'Teksto "' + hi + '" ilgis yra ' + hiSize + ' simboliu.';

console.log(textSize1);
console.log(textSize2);
console.log('-----------------');

let textSize3 = '';
console.log(1, textSize3);

textSize3 = textSize3 + 'Teksto "';
console.log(2, textSize3);

textSize3 = textSize3 + hi;
console.log(3, textSize3);

textSize3 = textSize3 + '" ilgis yra ';
console.log(4, textSize3);

textSize3 = textSize3 + hi.length;
console.log(5, textSize3);

textSize3 = textSize3 + ' simboliu.';
console.log(6, textSize3);

console.clear();

const pomidoras = 'Pomidoras';
console.log(pomidoras);

const symbol1 = pomidoras[0];
console.log(symbol1);

const symbol2 = pomidoras[1];
console.log(symbol2);

const symbol3 = pomidoras[2];
console.log(symbol3);

const symbol4 = pomidoras[3];
console.log(symbol4);

console.log(pomidoras[99]);
console.log(pomidoras[-1]);
console.log(pomidoras[3.14]);
console.log(pomidoras[-3.14]);
console.log(pomidoras[Infinity]);
console.log(pomidoras[NaN]);

console.log(pomidoras[0]);
console.log(pomidoras[1]);
console.log(pomidoras[2]);
console.log(pomidoras[3]);
console.log(pomidoras[4]);
console.log(pomidoras[5]);
console.log(pomidoras[6]);
console.log(pomidoras[7]);
console.log(pomidoras[8]);
console.log(pomidoras[9]);

console.clear();

const agurkas = 'Zalias agurkas!';

const agurkasFirst = agurkas[0];
console.log(agurkasFirst);

const agurkasLast = agurkas[agurkas.length - 1];
console.log(agurkasLast);

const text = 'abcdef';
const lastSymbol = text[--text.length];
const lastSymbol2 = text[text.length - 1];

console.log(lastSymbol);
console.log(lastSymbol2);

const personName = 'Vardenis';
const personSurname = 'Pavardenis';

console.log('------------------');
// V.P.
const abbr = personName[0] + '.' + personSurname[0] + '.';

console.log(abbr);