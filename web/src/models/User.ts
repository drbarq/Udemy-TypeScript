import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
	// same line initializer auto created
	public events: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
	public attributes: Attributes<UserProps>;

	// initializer that requires inputs
	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs);
	}

	// if we wanted to change anyting for user, we would have to change eventing class
	// on(eventName: string, callback: Callback): void {
	// 	this.events.on(eventName, callback);
	// }

	get on() {
		// on method on the eventing class
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}

	set(update: UserProps): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	fetch(): void {
		const id = this.get('id');

		if (typeof id !== 'number') {
			throw new Error('Cannot fetch without an id');
		}

		this.sync.fetch(id).then((response: AxiosResponse): void => {
			// this.attributes.set(response.data)  calls in the attributes class
			this.set(response.data);
		});
	}

	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => {
				this.trigger('save');
			})
			.catch(() => {
				this.trigger('error');
			});
	}
}

// pre refactor
// import axios, { AxiosResponse } from 'axios';

// interface UserProps {
// 	id?: number;
// 	name?: string;
// 	age?: number;
// 	// the ? makes the field optional
// }

// // WRONG - returns an object
// // type Callback = () => {};
// type Callback = () => void;

// const usersUrl = 'http://localhost:3000/users';

// export class User {
// 	events: { [key: string]: Callback[] } = {};

// 	constructor(private data: UserProps) {}

// 	get(propName: string): string | number {
// 		return this.data[propName];
// 	}

// 	// set(update: { name: string; age: number }): void {}   // the same set below
// 	set(update: UserProps): void {
// 		Object.assign(this.data, update);
// 	}

// 	// callback is a function, takes no arguments and returns nothing
// 	// on(eventName: string, callback: () => {}) {}
// 	on(eventName: string, callback: Callback): void {
// 		// this.events[eventName]; //Callback[] or undefined
// 		const handlers = this.events[eventName] || [];
// 		handlers.push(callback);
// 		this.events[eventName] = handlers;
// 	}

// 	trigger(eventName: string): void {
// 		const handlers = this.events[eventName];

// 		if (!handlers || handlers.length === 0) {
// 			return;
// 		}

// 		handlers.forEach(callback => {
// 			callback();
// 		});
// 	}

// 	fetch(): void {
// 		axios
// 			// .get(`http://localhost:3000/users/${this.get('id')}`)
// 			.get(`${usersUrl}/${this.get('id')}`)
// 			.then((response: AxiosResponse): void => {
// 				this.set(response.data);
// 			});
// 	}

// 	save(): void {
// 		const id = this.get('id');

// 		if (id) {
// 			// put
// 			axios.put(`${usersUrl}/${id}`, this.data);
// 		} else {
// 			// post
// 			axios.post(usersUrl, this.data);
// 		}
// 	}
// }
