// import { User, UserProps } from './User';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

// generics T K are just variables passed in
export class Collection<T, K> {
	// models: User[] = [];
	models: T[] = [];
	events: Eventing = new Eventing();

	constructor(public rootUrl: string, public deserilize: (json: K) => T) {}

	// setting a getter to expose method to outside world
	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		axios.get(this.rootUrl).then((response: AxiosResponse) => {
			response.data.forEach((value: K) => {
				this.models.push(this.deserilize(value));
			});
			this.trigger('change');
		});
	}
}

// fetch(): void {
//   axios.get(this.rootUrl).then((response: AxiosResponse) => {
//     response.data.forEach((value: K) => {
//       const user = User.buildUser(value);
//       this.models.push(user);
//     });
//     this.trigger('change');
//   });
// }
