class Sorter {
	constructor(public collection: number[]) {}

	sort(): void {}
}

const sorter = new Sorter([10, 3, -5, 0]);

sorter.sort();
console.log(sorter.collection);

// using public as the identifier is the same as the field definitition
// class Sorter {
//   collection: number[];
//   constructor( collection: number[]) {
//     this.collection = collection;
//   }
// }
