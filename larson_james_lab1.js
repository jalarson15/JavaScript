//problem 1: string -> int -> absolute value
let aStr = -5;
let aNumber;
aNumber = parseInt(aStr);
posNum = Math.abs(aNumber);
console.log(posNum);

//problem 2: convert farenheit -> celsius
var farenheit = 212;
let celsius = 5 / 9 * (farenheit - 32);
console.log("the temperature in celsius is " + celsius);

//problem 3: calculate area and volume of a circle
let radius = 5;
let length = 10;
let area = Math.PI * Math.pow(radius, 2);
let volume = area * length;
console.log("The cylinder area is " + area.toFixed(2) + " and the volume is " + volume.toFixed(2));