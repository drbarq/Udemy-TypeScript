import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3000/users');

collection.on('change', () => {
	console.log(collection);
});

collection.fetch();

// import { User } from './models/User';

// const user = User.buildUser({ id: 1 });

// user.on('change', () => {
// 	console.log(user);
// });

// user.fetch();

// // const user = new User({ id: 1, name: 'newest name', age: 999 });

// user.on('save', () => {
// 	console.log(user);
// });

// user.save();

// const user = new User({ name: 'new record', age: 0 });

// console.log(user.get('name'));

// user.on('change', () => {
// 	console.log('user was changed ');
// });

// user.set({ name: 'new name' });

// reminder on how 'this' works in js

// return the on function from the events class
// getting back a reference for the on method on the eventing class
// const on = user.on;

// user.on('change', () => {
// 	console.log('user was changed ');
// });

// quick lesson on accessors

// class Person {
// 	constructor(public firstName: string, public lastName: string) {}

// 	get fullName(): string {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// const person = new Person('firstname', 'lastname');
// // normal function, needs to be invoked
// // console.log(person.fullName());
// // using the get accessor
// console.log(person.fullName);

// user.save();

// since Eventing is a module which is nested within User it needs to be called as nested

// user.events.on('change', () => {
// 	console.log('change');
// });

// user.events.trigger('change');

// update an existing user
// const user = new User({ id: 1 });

// user.set({ name: 'new name', age: 2000 });
// user.save();

// import axios from 'axios';

// axios.post('http://localhost:3000/users', {
// 	name: 'my name',
// 	age: 20
// });

// axios.get('http://localhost:3000/users/1');

// import { User } from './models/User';

// const user = new User({ name: 'Joe', age: 20 });

// user.on('change', () => {
// 	console.log('Change #1');
// });
// user.on('change', () => {
// 	console.log('Change #2');
// });
// user.on('save', () => {
// 	console.log('Save was triggered');
// });

// user.trigger('asdfdsf');
// console.log(user);
