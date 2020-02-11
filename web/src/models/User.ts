interface UserProps {
	name?: string;
	age?: number;
	// the ? makes the field optional
}

export class User {
	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	// set(update: { name: string; age: number }): void {}   // the same set below
	set(update: UserProps): void {
		Object.assign(this.data, update);
	}
}
