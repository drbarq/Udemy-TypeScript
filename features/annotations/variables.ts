let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
// variable called now that can only be assigned a type date

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {}
// variable car will only refer to an instance of a car
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
// Expect the function to return nothing :: annotation for the vaariable
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotation
//  1) functions that returns the 'any' type
// json simulates a json string
const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates.x);

// 2) when we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
// foundWord can be done each way, but inference is better
// let foundWord: boolean;
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, -12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
