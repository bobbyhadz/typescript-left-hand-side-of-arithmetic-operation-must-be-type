export {};

// The left-hand side of an arithmetic operation must be type 'any', 'number', 'bigint' or an enum type

// EXAMPLE 1 - Use the `getTime()` method when subtracting Date

const date1 = new Date('2023-07-24');
const date2 = new Date('2023-07-23');

const result = date1.getTime() - date2.getTime();

console.log(result); // 👉️ 86400000

// ---------------------------------------------------

// // EXAMPLE 2 - Convert the values to Numbers if `number` is the expected type

// const result = Number('5') - Number('3');

// console.log(result); // 👉️ 2

// ---------------------------------------------------

// // The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type

// // EXAMPLE 3 - Convert the right-hand side value to a number

// const result = 5 - Number('3');

// console.log(result); // 👉️ 2

// ---------------------------------------------------

// // EXAMPLE 4 - Solve the error when working with Dates

// const date1 = new Date('2022-06-17');
// const date2 = new Date('2022-06-16');

// const result = date1.getTime() - date2.getTime();

// console.log(result); // 👉️ 86400000
