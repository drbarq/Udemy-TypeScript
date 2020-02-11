import { User } from './models/User';

const user = new User({ name: 'Joe', age: 20 });

user.on('change', () => {
	console.log('Change #1');
});
user.on('change', () => {
	console.log('Change #2');
});
user.on('save', () => {
	console.log('Save was triggered');
});

user.trigger('asdfdsf');
console.log(user);
