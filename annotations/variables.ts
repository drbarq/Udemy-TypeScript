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
// Expect the function to return nothing
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotation
//  1) functions that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates.x);
