import axios, { AxiosResponse } from 'axios';

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const usersUrl = 'http://localhost:3000/users';

// option 3
// only accept properties into constructor
// hard code dependencies as class properties
// lose some benefits of composition
//

export class User {
	// events: Eventing = new Eventing();

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	fetch(): void {
		axios
			// .get(`http://localhost:3000/users/${this.get('id')}`)
			.get(`${usersUrl}/${this.get('id')}`)
			.then((response: AxiosResponse): void => {
				this.set(response.data);
			});
	}

	save(): void {
		const id = this.get('id');

		if (id) {
			// put
			axios.put(`${usersUrl}/${id}`, this.data);
		} else {
			// post
			axios.post(usersUrl, this.data);
		}
	}
}

const user = new User({});

// user.events; // already built in
