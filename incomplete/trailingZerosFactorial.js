// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

// function zeros(num) {
//     let factorial = 1
//     let splitFactorial = []
//     let zeros = []
//     factorial = (function() {
//         var cache = {},
//             fn = function(num) {
//                 if (num === 0) {
//                     return 1;
//                 } else if (cache[num]) {
//                     return cache[num];
//                 }
//                 return cache[num] = num * fn(num -1);
//             };
//         return fn;
//     })();
//     console.log(factorial())
//     console.log(factorial);
    
//     splitFactorial = factorial.toString().split('')
//     console.log(splitFactorial)
//     for (let i = splitFactorial.length; i > 0 ; i--) {
//         if (splitFactorial[i] === '0' && splitFactorial[i] === splitFactorial[i+1] ) {zeros.push(splitFactorial[i])}
//     }
//     return zeros
  
// }
// console.log(zeros(1))