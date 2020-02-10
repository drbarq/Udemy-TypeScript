// import { NumbersCollection } from './NumbersCollection';

// if a data object satisfies these properties, it can be sorted
interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
	constructor(public collection: Sortable) {}

	sort(): void {
		const { length } = this.collection;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collection.compare(j, j + 1)) {
					this.collection.swap(j, j + 1);
				}
			}
		}
	}
}

// export class Sorter {
// 	constructor(public collection: ) {}

// 	sort(): void {
// 		const { length } = this.collection;

// 		for (let i = 0; i < length; i++) {
// 			for (let j = 0; j < length - i - 1; j++) {
// 				// all of this only works if number[]
// 				// if collection is an array of numbers
// 				// type guard
// 				if (this.collection instanceof Array) {
// 					if (this.collection[j] > this.collection[j + 1]) {
// 						const leftHand = this.collection[j];
// 						this.collection[j] = this.collection[j + 1];
// 						this.collection[j + 1] = leftHand;
// 					}
// 				}
// 				if (typeof this.collection === 'string') {
// 				}

// 				// if it is a string, do this one instead
// 				// only work if collection is string
// 			}
// 		}
// 	}
// }
