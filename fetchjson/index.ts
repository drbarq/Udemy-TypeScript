import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// what ts should expect for the Todo object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

// const logTodo = (id, title, completed) => {
//   console.log(`
//     The Todo with ID: ${id}
//     Has a title of: ${title}
//     Is it finished? ${completed}
//   `);
// };
// clarifies the data type for the input

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
