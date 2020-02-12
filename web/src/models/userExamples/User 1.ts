import axios, { AxiosResponse } from 'axios';

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const usersUrl = 'http://localhost:3000/users';

// option 1
// accept dependencies as second constructor argument

export class User {
	constructor(private data: UserProps, private events: Eventing) {}

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

// how to create it
// new User({ id: 1 }, new Eventing());
