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
new ArrayOfAnything<string>(['a', 'b', 'c']);
