import { User } from './models/User';

const user = new User({ name: 'Joe', age: 20 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'newName', age: 999 });

user.set({ name: 'back to joe' });

console.log(user.get('name'));
console.log(user.get('age'));

console.log(user);
