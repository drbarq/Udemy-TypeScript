import axios, { AxiosResponse } from 'axios';

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const usersUrl = 'http://localhost:3000/users';

// option 2
// only accept dependencies into constructor
// define a static class method to preconfigure user and assign properties afterwards
// user set data is annoying and requires initialization

export class User {
	static fromData(data: UserProps): User {
		const user = new User(new Eventing());
		user.set(data);
		return user;
	}

	private data: UserProps;

	constructor(private events: Eventing) {}

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
