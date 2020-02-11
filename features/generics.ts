class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

// very similar to the other data type arrays classes.  allows us to put in any type as the code under it is the same
class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

// allows us to use the array of anything and specify the anything when created with string datatype
const arr1 = new ArrayOfAnything<string>(['a', 'b', 'c']);
const arr2 = new ArrayOfAnything(['a', 'b', 'c']);
// ^ same thing and ts knows whats going on due to data inference

// example of generics with functions

function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
// T[] is inputted into the function anywhere T or data type is
// printAnything<string>(['a', 'b', 'c']);
printAnything(['a', 'b', 'c']);

// allows it to catch errors: with the example below
// printAnything<string>([1, 2, 3]);

// generic constraints

class Car {
	print() {
		console.log('I am a car');
	}
}

class House {
	print() {
		console.log('I am a house');
	}
}

interface Printable {
	print(): void;
}

// this function doesnt know if the data/class passed to it will have a print function so we need to use an interface
// function printHousesOrCars<T>(arr: T[]): void {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i].print();
// 	}
// }

function printHousesOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

// printHousesOrCars([1, 2, 3, 4]); //doenst work because number doesnt have a print method
printHousesOrCars([new House(), new House()]); //house does

printHousesOrCars<House>([new House(), new House()]); //house does
printHousesOrCars<Car>([new Car(), new Car()]); //house does
