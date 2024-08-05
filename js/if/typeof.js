console.log(typeof 0);
console.log(typeof 123);
console.log(typeof 1.23);
console.log(typeof -1.23);
console.log(typeof -123);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

console.log('----------');
console.log(typeof '');
console.log(typeof 'labas');

console.log('----------');
console.log(typeof true);
console.log(typeof false);

console.log('----------');
console.log(typeof undefined);

console.log('----------');
console.log(typeof []);
console.log(typeof [1, 2]);
console.log(typeof ['labas', 'rytas']);

console.log(typeof {});
console.log(typeof { name: 'Jonas', age: 99 });

console.log(typeof null);

console.log('----------');
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray(['labas', 'rytas']));
console.log(Array.isArray(777));
console.log(Array.isArray('adsf'));
console.log(Array.isArray(true));
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));

console.log('----------');
console.log(null === null);

function arTikrasObjektas(item) {
    if (typeof item !== 'object'
        || item === null
        || Array.isArray(item)
    ) {
        return false;
    }
    return true;
}

console.log('----------');
console.log(arTikrasObjektas(1));
console.log(arTikrasObjektas('s'));
console.log(arTikrasObjektas(true));
console.log(arTikrasObjektas(undefined));
console.log(arTikrasObjektas(arTikrasObjektas));
console.log(arTikrasObjektas(null));
console.log(arTikrasObjektas([]));
console.log(arTikrasObjektas({}));