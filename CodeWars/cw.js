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