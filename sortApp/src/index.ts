import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// the child class will now call .sort directly and avoid Sorter as an object
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// const numbersCollection = new NumbersCollection([10, 3, -5, 50]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('xisafeE');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// charactersCollection.sort();
// console.log(charactersCollection.data);
// console.log(sorter.collection);

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.sort();
// linkedList.print();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
