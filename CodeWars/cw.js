// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
//     // Your code here.
//   const remainingBlue = blueStart - bluePulled;
//   const totalRemaining = (blueStart - bluePulled) + (redStart - redPulled);
//   return remainingBlue / totalRemaining;
// }

// console.log(guessBlue(5, 5, 2, 3));

// const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
//   return (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled));
// };

// console.log(guessBlue(5, 5, 2, 3)); 

// ----------------------------------------------------

// function past(h, m, s){
//   //#Happy Coding! ^_^
//   const hoursToMilliSeconds = h * 3600000;
//   const minutesToMilliseconds = m * 60000;
//   const secondsToMilliseconds = s * 1000;

//   return hoursToMilliSeconds + minutesToMilliseconds + secondsToMilliseconds;
// }

// console.log (past(0,1,1));

// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }

// console.log (past(0,1,1));

// function past(h, m, s){
//   const setTime = new Date().setHours(h, m, s);
//   const midnight = new Date().setHours(0, 0, 0);
  
//   return Math.round(setTime - midnight);
// }

// console.log (past(0,1,1));

// ----------------------------------------------------

// var summation = function(num) {
//   // Code here
//   var totalSum = 0;

//   for (var i = 1; i <= num; i++) {
//     totalSum += i;
//   }

//   return totalSum;
// };

// console.log(summation(2));
// console.log(summation(8));  

// var summation = function (num) {

//   if (num === 1) return 1;
//   return num + summation (num-1);
// }

// console.log(summation(2));
// console.log(summation(8));  

// ---------------------------------------

// function litres (time) {
// let litres = time * 0.5;
// let roundedLitres = Math.floor(litres);

// return roundedLitres

// }

// let time1 = 3;
// console.log(litres(time1));

// let time2 = 6.7;
// console.log(litres(time2));

// let time3 = 11.8;
// console.log(litres(time3));

// function litres(time) {
//     return Math.floor(time/2);
//   }

// ------------------------------------------

// const areaOrPerimeter = function(l, w) {
//     if (l === w) {
//         return l * w;
//     }else {
//         return 2 * (l + w);
//     }
// };

// console.log(areaOrPerimeter(6, 10));
// console.log(areaOrPerimeter(3,3));



// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l + w)
//   };

//   console.log(areaOrPerimeter(6, 10));
// console.log(areaOrPerimeter(3,3));

// ----------------------------------------

// function century(year) {
//     return Math.ceil(year / 100);
// }

// console.log(century(1705)); 
// console.log(century(1900)); 
// console.log(century(1601)); 
// console.log(century(2000)); 
// console.log(century(2742)); 

// ---------------------------------------------

// function countSheeps(sheep) {
//     return sheep.filter(sheep => sheep === true).length;
//   }
  
//   const sheepArray = [
//     true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true
//   ];
  
//   console.log(countSheeps(sheepArray));


// -------------------------------------------

// function enough(cap, on, wait) {
//     // your code here
//     let remainingSpace = cap - on;
//     if(remainingSpace >= wait) {
//         return 0;
//     } else {
//         let cannotFit = wait - remainingSpace;
//         return cannotFit;
//     }
// }
 
// console.log(enough(10, 5, 5)); 
// console.log(enough(100, 60, 50)); 
// console.log(enough(20, 5, 10));
// console.log(enough(30, 25, 10)); 

// function enough(cap, on, wait) {
//     return cap - wait - on < 0 ? on + wait - cap : 0;
//   }

//   -------------------------------------------

// function otherAngle(a, b) {
//     return 180 - (a + b);
//   }

// console.log(otherAngle(30, 60)); 90
// console.log(otherAngle(45, 45)); 90
// console.log(otherAngle(75, 25)); 80

// -------------------------------------------

// function magNumber(info) {
//     const bulletsPerMagazine = {
//         'PT92': 17,
//         'M4A1': 30,
//         'M16A2': 30,
//         'PSG1': 5
//     };

//     const [weapon, streets] = info;
//     const totalBulletsNeeded = streets * 3;
//     const bulletsInMagazine = bulletsPerMagazine[weapon];
//     return Math.ceil(totalBulletsNeeded / bulletsInMagazine);
// }

// console.log(magNumber(['PT92', 6]));  2
// console.log(magNumber(['M4A1', 6]));  1
// console.log(magNumber(['M16A2', 6])); 1
// console.log(magNumber(['PSG1', 6]));  4

// ----------------------------------------------

// function findDifference(a, b) {
//     let volumeA = a.reduce((acc, val) => acc * val, 1);
//     let volumeB = b.reduce((acc, val) => acc * val, 1);
//     return Math.abs(volumeA - volumeB);
//   }
//   console.log(findDifference([2, 2, 3], [5, 4, 1])); 8
  

// const times = (a, b) => a * b;

// const find_difference = (a, b) => 
// 	Math.abs(a.reduce(times) - b.reduce(times));

// ----------------------------------------------

// function reverseWords(str) {
//     let words = str.split(' ');

//     let reversedWords = words.reverse();
    
//     return reversedWords.join(' ');
// }

// console.log(reverseWords("The greatest victory is that which requires no battle")); 
 
// function reverseWords(str){
//     return str.split(' ').reverse().join(' ');
//   }
// ----------------------------------------------

// function bmi(weight, height) {
//     let bmi = weight / (height * height);
//     if (bmi <= 18.5) {
//         return "Underweight";
//     } else if (bmi <= 25.0) {
//         return "Normal";
//     } else if (bmi <= 30.0) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }

// console.log(bmi(50, 1.75));
// console.log(bmi(70, 1.75));
// console.log(bmi(85, 1.75));
// console.log(bmi(95, 1.75));

// function bmi(weight, height) {
//     let bmi = weight / height ** 2
//     return bmi <= 18.5 ? "Underweight" : 
//            bmi <= 25 ? "Normal" :
//            bmi <= 30 ? "Overweight": "Obese";
//   }

// ----------------------------------------------

// function switchItUp(number) {
//     switch (number) {
//         case 0:
//             return "Zero";
//         case 1:
//             return "One";
//         case 2:
//             return "Two";
//         case 3:
//             return "Three";
//         case 4:
//             return "Four"
//         case 5:
//             return "Five";
//         case 6:
//             return "Six";
//         case 7:
//             return "Seven";
//         case 8:
//             return "Eight";
//         case 9:
//             return "Nine"
//         default:
//             return "Invalid number";        
//     }
// }

// console.log(switchItUp(0));  // "Zero"
// console.log(switchItUp(1));  // "One"
// console.log(switchItUp(5));  // "Five"
// console.log(switchItUp(9));  // "Nine"
// console.log(switchItUp(10)); // "Invalid number"

// function switchItUp (number) {
//     return 'Zero One Two Three Four Five Six Seven Eight Nine'.split(' ')[number];
//   }

// ----------------------------------------------

// function simpleMultiplication(number) {
//     // your code........
//     if (number % 2 === 0) {
//         return number * 8;
//     } else {
//         return number * 9;
//     }
// }

// console.log(simpleMultiplication(2));  
// console.log(simpleMultiplication(3)); 
// console.log(simpleMultiplication(10));
// console.log(simpleMultiplication(7));

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }

// ----------------------------------------------

// function xor(a, b) {
//     // TODO: Program Me
//     return a != b;
//   }

//   console.log(xor(false, false)); 
//   console.log(xor(true, false)); 
//   console.log(xor(false, true));  
//   console.log(xor(true, true));   

//   const xor=(a, b)=>a!=b;

  // ----------------------------------------------

//   function checkAlive(health) {
//     if (health > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   console.log(checkAlive(10));  
//   console.log(checkAlive(1));   
//   console.log(checkAlive(0));   
//   console.log(checkAlive(-5));

//   function checkAlive(health) {
//     return health > 0;
//   }

//   ----------------------------------------------

// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1);
//   }
  
//   console.log(capitalizeWord("hello")); 
//   console.log(capitalizeWord("Hello")); 
//   console.log(capitalizeWord("a"));    
  
// ------------------------------------------------

// function contamination(text, char) {
//   // Code here ;)
//   if (text === "" || char === "") {
//     return "";
//   }
  
//   return char.repeat(text.length);
// }

// console.log(contamination("abc", "z")); 
// console.log(contamination("", "z"));    
// console.log(contamination("abc", ""));  

// function contamination(text, char){
//   return char.repeat(text.length)
// }

// ------------------------------------------------

// function sayHello(name) {
//   return 'Hello, ' + name;
// }

// console.log(sayHello("Mr. Spock")); 

// --------------------------------------------------

// function setAlarm (employed, vacation) {
//     return employed && !vacation;
// }

// console.log(setAlarm(true, true));
// console.log(setAlarm(true, false));
// console.log(setAlarm(false, true));
// console.log(setAlarm(false, false));

// const setAlarm = (employed, vacation) => employed && !vacation;

// ----------------------------------------------------

// function smash(words) {
//     return words.join(' ');
// }

// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

// const smash = words => words.join(' ');

// ------------------------------------------------------

// function greet(name){
//   if(name === "Johnny") {
//     return "Hello, my love!"; 
//   } else {
//       return "Hello, " + name + "!";     
//   }
// }
// console.log(greet('Johnny'));
// console.log(greet('name'));

// const greet = name =>
//   name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";

// -------------------------------------------------------

// const createGreetFunction = (greetingName) => {
//   return () => 'Hello, ' + greetingName + '!';
// }

// const greetAbe = createGreetFunction('Abe');
// const greetBen = createGreetFunction('Ben');

// console.log(greetAbe());
// console.log(greetBen());

// const greet = name =>
//   () => `Hello, ${name}!`;
// const greet_abe = greet(`Abe`);
// const greet_ben = greet(`Ben`);

// -------------------------------------------------------

// function findNeedle(haystack) {
//   // your code here
// const position = haystack.indexOf("needle");

// return `found the needle at position ${position}`;
// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }

// -------------------------------------------------------

// function pillars(numPill, dist, width) {
//   // your code here
//     if (numPill < 2) return 0;
//     const distInCm = dist * 100;
//     const totalDistanceInCm = (numPill - 1) * distInCm;
//     return totalDistanceInCm - width;
//   }
  
//   console.log(pillars(1, 10, 10)); 
//   console.log(pillars(2, 20, 25));
//   console.log(pillars(11, 15, 30)); 

// -------------------------------------------------------

// function solution(a, b){
//   // your code here
//   if (a.length < b.length) {
//       return a + b + a; 
//   } else {
//       return b + a + b;
//   }
// }

// console.log(solution("1", "22"));
// console.log(solution("22", "1"));

// function solution(a, b) {
//   return a.length < b.length ? a + b + a : b + a + b
// }

// const solution = (a, b) => (a.length > b.length) ? b + a + b : a + b + a;

// -------------------------------------------------------

// function paperwork(n, m) {
//   if (n < 0 || m < 0) {
//       return 0;
//   }
//   return n * m;
// }

// console.log(paperwork(5, 5));
// console.log(paperwork(-5, 5));

// function paperwork(n, m) {
//   return n < 0 || m < 0 ? 0 : n * m;
// }

// -------------------------------------------------------

// function peopleWithAgeDrink(old) {
//   if (old < 14) {
//       return "drink toddy";
//   }
//   if (old < 18) {
//       return "drink coke";
//   }
//   if (old < 21) {
//       return "drink beer";
//   }
//   return "drink whisky";
// }

// console.log(peopleWithAgeDrink(13)); 
// console.log(peopleWithAgeDrink(17)); 
// console.log(peopleWithAgeDrink(18)); 
// console.log(peopleWithAgeDrink(20)); 
// console.log(peopleWithAgeDrink(30)); 

// const peopleWithAgeDrink = (age) =>
//   age < 14 ? "drink toddy" :
//   age < 18 ? "drink coke" :
//   age < 21 ? "drink beer" : "drink whisky"

// -------------------------------------------------------

// function validateHello(greetings) {
//   const pattern = /hello|ciao|salut|hallo|hola|ahoj|czesc/i
//   const res = pattern.test(greetings);
//   return res;
// }

// function validateHello(greetings) {
//   return /(ahoj|ciao|czesc|h[ae]llo|hola|salut)/i.test(greetings)
// }

// -------------------------------------------------------

// function booleanToString(b){
//   //your code here
//   return b.toString();
// }

// console.log(booleanToString(true));
// console.log(booleanToString(false));


// function booleanToString(b){
//   return b ? 'true' : 'false';
// }

// -------------------------------------------------------

// function updateLight(current) {
//   if (current === 'green') {
//     return 'yellow';
//   } else if (current === 'yellow') {
//     return 'red';
//   } else if (current === 'red') {
//     return 'green';
//   }
// }

// console.log(updateLight('green')); 
// console.log(updateLight('yellow')); 
// console.log(updateLight('red'));

// function updateLight(current) {
  
//   return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

// }

// -------------------------------------------------------

// function quadrant(x, y) {
//   if (x > 0 && y > 0) {
//     return 1;  
//   } else if (x < 0 && y > 0) {
//     return 2; 
//   } else if (x < 0 && y < 0) {
//     return 3;  
//   } else if (x > 0 && y < 0) {
//     return 4;  
//   }
// }
// console.log(quadrant(1, 2));    
// console.log(quadrant(-10, 100)); 
// console.log(quadrant(-1, -9));   
// console.log(quadrant(19, -56)); 

// function quadrant(x, y) {
//   if (x > 0 && y > 0) return 1;
//   if (x < 0 && y > 0) return 2;
//   if (x < 0 && y < 0) return 3;
//   return 4;

//   function quadrant(x, y) {
//     return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
//   }

//   -------------------------------------------------------

// function integrate(coefficient, exponent) {
//   let newExponent = exponent + 1;
  
//   let newCoefficient = coefficient / newExponent;
  
//   return `${newCoefficient}x^${newExponent}`;
// }

// const integrate = (coefficient, exponent) => {
//   return coefficient / (exponent + 1) + 'x^' + (exponent + 1);
// }

// console.log(integrate(3, 2));   
// console.log(integrate(20, 1));   
// console.log(integrate(40, 3));   
// console.log(integrate(90, 2));   

// -------------------------------------------------------

// function derive(coefficient, exponent) {
//   let product = coefficient * exponent;
//   let newExponent = exponent - 1;
//   return `${product}x^${newExponent}`;
// }

// function derive(coefficient,exponent) {
//   return `${coefficient*exponent}x^${exponent-1}`
// }

// function derive(a, b) {
//   return (a * b) + "x^" + (b - 1);
// }

// console.log(derive(7, 8));  
// console.log(derive(5, 9));  

// -------------------------------------------------------

// function checkForFactor(base, factor) {
//   return base % factor === 0;
// }

// console.log(checkForFactor(6, 2));  // true, nes 6 % 2 = 0
// console.log(checkForFactor(7, 2));  // false, nes 7 % 2 = 1
// console.log(checkForFactor(10, 5)); // true, nes 10 % 5 = 0
// console.log(checkForFactor(15, 4)); // false, nes 15 % 4 = 3

// const checkForFactor = (base, factor) => !(base % factor);

// -------------------------------------------------------

// function getAverage(marks){
//   //TODO : calculate the downward rounded average of the marks array
//   const totalSum = marks.reduce((sum, mark) => sum + mark, 0);
//   const average = totalSum / marks.length;
//   return Math.floor(average);
// }

// console.log(getAverage([90, 80, 70, 60])); 
// console.log(getAverage([100, 95, 85, 80])); 
// console.log(getAverage([65, 75, 85, 95]));  

// function getAverage(marks){
//   return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
// }

// -------------------------------------------------------

// function quadratic(x1, x2) {
//   const a = 1;
//   const b = -(x1 + x2);
//   const c = x1 * x2;
//   return [a, b, c];
// }

// console.log(quadratic(1, 2)); 
// console.log(quadratic(0, 1));  
// console.log(quadratic(3, 3)); 

// function quadratic(x1, x2){
//   return [1, -(x2 + x1), (x1 * x2)]
// }

// -------------------------------------------------------

// function grow(x){
//   let result = 1;
//   for (let i = 0; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// console.log(grow([1,2,3,4]));

// const grow=x=> x.reduce((a,b) => a*b);

// -------------------------------------------------------

// function square(num) {
//   return num * num;
// }

// console.log(square(5));

// const square = (n) => n * n;

// --------------------------------------------------------

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   // code goes here
//   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }  
// console.log(goals(5, 10, 2));

// const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;

// --------------------------------------------------------

// function sc(floor) {
//   if (floor <= 1) {
//     return ""; 
//   }

//   let scream = "Aa~ ".repeat(floor - 1) + "Pa!"; 

//   if (floor <= 6) {
//     scream += " Aa!";
//   } 

//   return scream;
// }

// console.log(sc(2)); 
// console.log(sc(6)); 
// console.log(sc(7)); 
// console.log(sc(10)); 

// const sc = floor => 
//   floor >= 7 ? 'Aa~ '.repeat(floor - 1) + 'Pa!' :
//   floor > 1 ?  'Aa~ '.repeat(floor - 1) + 'Pa! Aa!' : ''

// --------------------------------------------------------

// function createArray(number) {
//   var newArray = [];
  
//   for (var counter = 1; counter <= number; counter++) { 
//     newArray.push(counter);
//   }
  
//   return newArray;
// }

// console.log(createArray(5)); 
// console.log(createArray(3)); 

// --------------------------------------------------------

// function buildString(...template) {
//   return `I like ${template.join(', ')}!`;
// }

// console.log(buildString('Cheese', 'Milk', 'Chocolate'));

// const buildString = (...template) => `I like ${template.join(', ')}!`;

// --------------------------------------------------------

// function evalObject(value) {
//   var result = 0;
//   switch(value.operation) {
//     case '+': 
//       result = value.a + value.b;
//       break;
//     case '-': 
//       result = value.a - value.b;
//       break;
//     case '/': 
//       result = value.a / value.b;
//       break;
//     case '*': 
//       result = value.a * value.b;
//       break;
//     case '%': 
//       result = value.a % value.b;
//       break;
//     case '^': 
//       result = Math.pow(value.a, value.b);
//       break;
//   }
//   return result;
// }

// const evalObject = value => {
//   return {
//     '+': v => v.a + v.b,
//     '-': v => v.a - v.b,
//     '/': v => v.a / v.b,
//     '*': v => v.a * v.b,
//     '%': v => v.a % v.b,
//     '^': v => v.a ** v.b,
//   }[value.operation](value);
// }

// console.log(evalObject({a: 5, b: 3, operation: '+'}));
// console.log(evalObject({a: 5, b: 3, operation: '^'})); 

// --------------------------------------------------------

// function wrap(value) {
//   return {
//     value: value
//   };
// }

// const wrapper_obj = wrap("my_wrapped_string");
// console.log(wrapper_obj);
// console.log(wrapper_obj["value"] === "my_wrapped_string");  

// const wrap = value => ({value});

// --------------------------------------------------------

// const solve = (x, y) => x / y

// console.log(solve(10,5));

// --------------------------------------------------------

// function weatherInfo(temp) {
//   var c = convertToCelsius(temp);
//   console.log("Temperature in Celsius: " + c);
//   if (c <= 0)
//     return c + " is freezing temperature";
//   else
//     return c + " is above freezing temperature";
// }

// function convertToCelsius(temperature) {
//   var celsius = (temperature - 32) * (5 / 9);
//   console.log("Converted temperature: " + celsius);
//   return celsius;  
// }

// console.log(weatherInfo(50));  
// console.log(weatherInfo(0));   

// const weatherInfo = temperature => temperatureMesage(convertToCelsius(temperature));

// const convertToCelsius = temperature => (temperature - 32) * (5 / 9);

// const temperatureMesage = temperature => temperature + ((temperature <= 0) ? " is freezing temperature" : " is above freezing temperature")

// --------------------------------------------------------

// let items = [];
// items.push({a: "b", c: "d"});  

// console.log(items);

// items = [{a: "b", c: "d"}];

// --------------------------------------------------------

// function myFirstKata(a, b) {
//   if (typeof(a) !== "number" || typeof(b) !== "number") {
//     return false;
//   } else {
//     return a % b + b % a;
//   }
// }

// console.log(myFirstKata(10, 2)); 
// console.log(myFirstKata("10", 2));

// const myFirstKata = (a, b) => typeof a !== "number" || typeof b !== "number" ? false : a % b + b % a;

// --------------------------------------------------------

// function rainAmount(mm) {
//   if (mm < 40) {
//       return "You need to give your plant " + (40 - mm) + "mm of water";
//   } else {
//       return "Your plant has had more than enough water for today!";
//   }
// }

// console.log(rainAmount(39));
// console.log(rainAmount(40));
// console.log(rainAmount(50));

// function rainAmount(mm){
//   return mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!"
// }

// --------------------------------------------------------

// function getMax1() {
//   var max = {
//       name: 'Max Headroom'
//   };
//   return max;
// }

// function getMax2() {
//   return {
//       name: 'Max Headroom'
//   };
// }

// console.log(getMax1());
// console.log(getMax2());

// const getMax1 = getMax2 = () => ({ name: 'Max Headroom' })

// --------------------------------------------------------

// function saleHotdogs(n) {
//   return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
// }

// console.log(saleHotdogs());

// const saleHotdogs=n=>n*(n<5?100:n<10?95:90);

// --------------------------------------------------------

// function giveMeFive(obj) {
//   let result = [];
//   for (let key in obj) {
//     if (key.length === 5) {
//       result.push(key);
//     }
//     if (obj[key].length === 5) {
//       result.push(obj[key]);
//     }
//   }
//   return result;
// }

// console.log(giveMeFive());

// function giveMeFive(obj){
//   // for ( in )
//   return Object.entries(obj).join(',').split(',').filter((el) => el.length == 5);
// }

// --------------------------------------------------------

// function helloWorld() {
//   var str = "Hello World!";
//   console.log(str);
// }

// console.log(helloWorld);

// --------------------------------------------------------

// function pickIt(arr){
//   var odd = [], even = [];
  
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     } else {
//       odd.push(arr[i]); 
//     }
//   }
  
//   return [odd, even];
// }

// console.log(pickIt([1, 2, 3, 4, 5])); 

// function pickIt (arr) {
  
//   let odd = []
//   let even =[]
      
//   for (var x of arr) {
//       ((x % 2) ? odd : even).push(x)    
//   }
      
//   return [odd, even]
// }

// -------------------------------------------------------

// function padIt(str, n) {
//   while (n > 0) {
//     if (n % 2 !== 0) {
//       str = '*' + str;
//     } else {
//       str = str + '*';
//     }
//     n--;
//   }
//   return str;
// }

// console.log(padIt());

// function padIt(str, n) {
//   while (n > 0) {
//     str = n-- % 2 ? '*' + str : str + '*';
//   }
//   return str;
// }

// -------------------------------------------------------

// function grabDoll(dolls) {
//   var bag = [];
  
//   for (var i = 0; i < dolls.length; i++) {
//     if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
//       bag.push(dolls[i]);
//     } else {
//       continue;
//     }
    
//     if (bag.length === 3) {
//       break;
//     }
//   }
  
//   return bag;
// }

// console.log(grabDoll(["Barbie doll", "Teddy bear", "Hello Kitty", "Action figure", "Hello Kitty", "Barbie doll", "Doll"]));

// // Array's filter & slice methods

// grabDoll = dolls =>                         // reduce instead for(...) break continue
//   dolls.filter(i => i == 'Hello Kitty' || i == 'Barbie doll').slice(0, 3);
 
//  -------------------------------------------------------

// function whatNumberIsIt(n) {
//   if (n === Number.MAX_VALUE) {
//     return "Input number is Number.MAX_VALUE";
//   } else if (n === Number.MIN_VALUE) {
//     return "Input number is Number.MIN_VALUE";
//   } else if (isNaN(n)) {
//     return "Input number is Number.NaN";
//   } else if (n === Number.NEGATIVE_INFINITY) {
//     return "Input number is Number.NEGATIVE_INFINITY";
//   } else if (n === Number.POSITIVE_INFINITY) {
//     return "Input number is Number.POSITIVE_INFINITY";
//   } else {
//     return "Input number is " + n;
//   }
// }

// console.log(whatNumberIsIt(1 / 0));                 
// console.log(whatNumberIsIt(-1 / 0));                 
// console.log(whatNumberIsIt(100));                    
// console.log(whatNumberIsIt(Number.MAX_VALUE));       
// console.log(whatNumberIsIt(Number.MIN_VALUE));      
// console.log(whatNumberIsIt(NaN)); 

// function whatNumberIsIt(n){
//   switch (true) {
//     case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
//     case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
//     case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
//     case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
//     case (isNaN(n)): return "Input number is Number.NaN";
//     default: return "Input number is " + n;
//   }
// }

//  -------------------------------------------------------

// function animal(obj) {
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
// }

// const dog = { name: "dog", legs: 4, color: "white" };
// console.log(animal(dog));  

// console.log(animal({ name: "cat", legs: 4, color: "black" }));  
// console.log(animal({ name: "bird", legs: 2, color: "yellow" })); 

// function animal(obj){
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
// }

//  -------------------------------------------------------

// function feast(beast, dish) {
//   const beastFirstChar = beast[0];
//   const beastLastChar = beast[beast.length - 1];
//   const dishFirstChar = dish[0];
//   const dishLastChar = dish[dish.length - 1];

//   return beastFirstChar === dishFirstChar && beastLastChar === dishLastChar;
// }

// console.log(feast("great blue heron", "garlic naan")); 
// console.log(feast("chickadee", "chocolate cake"));     
// console.log(feast("lion", "meat pie"));                 

// function feast(beast, dish) {
// 	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// }

// -------------------------------------------------------

  // var countSheep = function (num) {
  //   let result = "";  
    
  //   for (let i = 1; i <= num; i++) {
  //     result += i + " sheep...";  
  //   }
    
  //   return result;  
  // }

  // console.log(countSheep(3)); 

  // var countSheep = function (num){
  //   let str = "";
  //   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  //   return str;
  // }

  // -------------------------------------------------------

  // function cubeChecker(volume, side) {
  //   if (volume <= 0 || side <= 0) {
  //     return false;
  //   }
        
  //   return side ** 3 === volume;
  // }

  // console.log(cubeChecker());
  
  // var cubeChecker = function(volume, side){
  //   return Math.pow(side, 3) === volume && side > 0;
  // };

  // -------------------------------------------------------
