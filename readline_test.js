const add = (a, b) => {return a + b;}
const sub = (a, b) => {return a - b;}
const mult = (a, b) => {return a * b;}
const div = (a, b) => {return a / b;}


base = process.argv[2];
console.log(add(base, 3));
console.log(sub(2, 3));
console.log(mult(2, 3));
console.log(div(2, 3));