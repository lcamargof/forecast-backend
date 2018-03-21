// REVERSE STRING
// Every solution for this exercise takes O(n) to solve because we need to go through every letter of the string and the same for space because I'm creating a new string

const str = 'luiscamargo';

const recursiveReverse = (str) => {
  if (!str) return '';

  return recursiveReverse(str.substr(1)) + str.charAt(0);
};

const stringReverse = (str) => {
  let result = ''; // or []

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]; // Or result.push(str[i])
  }

  return result; // for array version just result.join()
};

console.log('First solution (reverse for iteration)', stringReverse(str));
console.log('Second solution (recursive)', recursiveReverse(str));
console.log('Last solution (array reverse):', str.split('').reverse().join('')); // This is the first thing that comes to my mind, but it uses native functions

// READ FILE

// var fs = require('fs');
// var importantData = undefined; // this line also should be removed
//
// function addOne() {
//   fs.readFile('input.txt', (err, importantData) => { readFile is an async function so the callback of this function will be executed after the console.log
//     if (err) throw err;
//     Still importData wasn't assigned here, I think it was better to put the assignment to make this trickier? at least for people who doesn't get async
//     + FIX: console.log(importData);
//   })
// }
//
// addOne();
//
// console.log(importantData); // this line should be removed

// Simple solution
const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, importData) => {
  if (err) throw err;

  console.log('Read file solution: ', importData);
});