/*
WHILE ciklas
*/

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

let i = 0;
for (; i < names.length;) {
    const name = names[i];
    i++;
    console.log(name);
}

let w = 0;
while (w < names.length) {
    const name = names[w];
    w++;
    console.log(name);
}

// -------------------

let ddos = 0;
while (true) {
    console.log(ddos++);

    if (ddos > 1000) {
        break;
    }
}