import axios from 'axios';

// axios.post('http://localhost:3000/users', {
// 	name: 'my name',
// 	age: 20
// });

axios.get('http://localhost:3000/users/1');

// import { User } from './models/User';

// const user = new User({ name: 'Joe', age: 20 });

// user.on('change', () => {
// 	console.log('Change #1');
// });
// user.on('change', () => {
// 	console.log('Change #2');
// });
// user.on('save', () => {
// 	console.log('Save was triggered');
// });

// user.trigger('asdfdsf');
// console.log(user);
