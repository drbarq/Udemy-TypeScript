import { User } from './models/User';

const user = new User({ name: 'Joe', age: 20 });

user.on('change', () => {});
user.on('change', () => {});
user.on('sdfdf', () => {});

console.log(user);
