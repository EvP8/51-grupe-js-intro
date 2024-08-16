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