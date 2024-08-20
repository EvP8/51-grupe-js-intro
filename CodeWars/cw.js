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