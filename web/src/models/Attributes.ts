export class Attributes<T> {
	constructor(private data: T) {}

	// K | T is not a special operator
	// this will be bound to the instance of this
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	};

	set(update: T): void {
		Object.assign(this.data, update);
	}
}

// uses the UserProps object to determine how the attributes are read via the UserProps key

// import { UserProps } from './User';

// export class Attributes<T> {
// 	constructor(private data: T) {}

// 	// K | T is not a special operator
// 	get<K extends keyof T>(key: K): T[K] {
// 		return this.data[key];
// 	}

// 	set(update: T): void {
// 		Object.assign(this.data, update);
// 	}
// }

// const attrs = new Attributes<UserProps>({
// 	id: 5,
// 	age: 20,
// 	name: 'asadf'
// });

// const name = attrs.get('name');
// const age = attrs.get('age');
// const id = attrs.get('id');

// preRefactor
// export class Attributes<T> {
// 	constructor(private data: T) {}

// 	get(propName: string): string | number {
// 		return this.data[propName];
// 	}

// 	set(update: T): void {
// 		Object.assign(this.data, update);
// 	}
// }
