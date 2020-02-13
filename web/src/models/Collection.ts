import { User } from './User';
import { Eventing } from './Eventing';

export class Collection {
	models: User[] = [];
	events: Eventing = new Eventing();

	// setting a getter to expose method to outside world
	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}
}
