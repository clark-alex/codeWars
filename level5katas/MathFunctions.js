Math.round = function (number) {
    let decimal = (number.toString().split('.'))
    console.log(decimal)
    console.log(decimal[1]/10)
    return +`.${decimal[1]}`>=.50 ? +decimal[0]+1 : +decimal[0]
};

Math.ceil = function(number) {
   let decimal = number.toString().split('.')
   return decimal[1]>0 ? +decimal[0]+1 : number
};

Math.floor = function (number) {
    let decimal = number.toString().split('.')
   return +decimal[0]
};

console.log(Math.ceil(5.01))
console.log(Math.floor(5.99))
console.log(Math.round(5.49999))
