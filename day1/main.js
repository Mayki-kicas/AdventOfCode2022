const input = require('fs').readFileSync('day1/input.txt', 'utf8').split('\n');

const numbers = input.map((number) => parseInt(number, 10));

const sum = numbers.reduce((acc, number) => {
    if (isNaN(number)) {
        acc.push(0);
    } else {
        acc[acc.length - 1] += number;
    }
    return acc;
    }
, [0]);


const max = Math.max(...sum);
console.log(max);

const max2 = sum.filter((number) => number !== max).reduce((acc, number) => {
    if (number > acc) {
        acc = number;
    }
    return acc;
}, 0);

const max3 = sum.filter((number) => number !== max && number !== max2).reduce((acc, number) => {
    if (number > acc) {
        acc = number;
    }
    return acc;
}, 0);

console.log(max + max2 + max3);
