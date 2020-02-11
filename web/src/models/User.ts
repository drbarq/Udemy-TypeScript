interface UserProps {
	name?: string;
	age?: number;
	// the ? makes the field optional
}

// WRONG - returns an object
// type Callback = () => {};
type Callback = () => void;

export class User {
	events: { [key: string]: Callback[] } = {};

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	// set(update: { name: string; age: number }): void {}   // the same set below
	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	// callback is a function, takes no arguments and returns nothing
	// on(eventName: string, callback: () => {}) {}
	on(eventName: string, callback: Callback): void {
		// this.events[eventName]; //Callback[] or undefined
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) {
			return;
		}

		handlers.forEach(callback => {
			callback();
		});
	}
}
