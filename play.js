/*
## Kaip patikrint string kuriame yra skaičiai ar tai sveikasis skaičius? (be decimals)

```js
console.log('-1.234'); // Kaip gauti false
```
*/

/*
whitelist
blacklist
*/

function validatePIN(value) {
    if (typeof value !== 'string'
        || value.length < 4
        || value.length > 10) {
        return false;
    }

    const validSymbols = '0123456789';

    for (const symbol of value) {
        if (!validSymbols.includes(symbol)) {
            console.log(`Blogas simbolis: "${symbol}"`);
            return false;
        }
    }

    return true;
}

console.log(validatePIN('123456'), true);
console.log(validatePIN('1256'), true);
console.log(validatePIN(1232), false);
console.log(validatePIN('-1.234'), false);
console.log(validatePIN('a256'), false);
console.log(validatePIN('1.234'), false);

console.clear();

/*
## kaip padaryti validacija kuri praleistu tik masyva su objektu viduje?
## kaip padaryti validacija kuri praleistu masyva, tik su objektu/-ais viduje?
*/

function arTuMasyvasSuObjektu(value) {
    if (!Array.isArray(value) || value.length === 0) {
        return false;
    }

    for (const item of value) {
        if (typeof item !== 'object'
            || Array.isArray(item)
            || item === null) {
            return false;
        }
    }

    return true;
}

console.log('------');

console.log(arTuMasyvasSuObjektu({}), false);
console.log(arTuMasyvasSuObjektu(null), false);
console.log(arTuMasyvasSuObjektu(), false);
console.log(arTuMasyvasSuObjektu(15), false);
console.log(arTuMasyvasSuObjektu('aadfs'), false);
console.log(arTuMasyvasSuObjektu(true), false);
console.log(arTuMasyvasSuObjektu(() => { }), false);

console.log(arTuMasyvasSuObjektu([12]), false);
console.log(arTuMasyvasSuObjektu([12, 34]), false);
console.log(arTuMasyvasSuObjektu(['asd']), false);
console.log(arTuMasyvasSuObjektu(['asd', 'qwe']), false);
console.log(arTuMasyvasSuObjektu([true]), false);
console.log(arTuMasyvasSuObjektu([true, false]), false);
console.log(arTuMasyvasSuObjektu([() => { }]), false);
console.log(arTuMasyvasSuObjektu([() => { }, () => { }]), false);
console.log(arTuMasyvasSuObjektu([{}, 123]), false);
console.log(arTuMasyvasSuObjektu([]), false);

console.log(arTuMasyvasSuObjektu([[]]), false);
console.log(arTuMasyvasSuObjektu([[], []]), false);

console.log(arTuMasyvasSuObjektu([null]), false);
console.log(arTuMasyvasSuObjektu([null, null]), false);

console.log('---------');

console.log(arTuMasyvasSuObjektu([{}]), true);
console.log(arTuMasyvasSuObjektu([{}, {}]), true);



/*

-----------
Pavadinimas

*/

console.log('-'.repeat('Pavadinimas'.length));
console.log('Pavadinimas');

/*
+------------------+----------+
| Pavadinimas      | Kaina    |
+------------------+----------+
| 1. Pomidoras     | 1.05 Eur |
| 2. Agurkas       | 1.05 Eur |
| 3. Cesnakeliukas | 1.05 Eur |
+------------------+----------+
*/

const dash = '-'.repeat('3. Cesnakeliukas'.length);

console.log(dash);
console.log('Pavadinimas');
console.log(dash);
console.log('1. Pomidoras');
console.log('2. Agurkas');
console.log('3. Cesnakeliukas');
console.log(dash);