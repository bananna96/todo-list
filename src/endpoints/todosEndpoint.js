import db from '../db/db';

function getTodos() {
	return db.todos;
}

// function setTodos(todos) {
// 	db.todos = todos;
// }

// function addTodo(todo) {
// 	// add to store
// 	db.todos.push({
// 		id: db.todos.length,
// 		title: todo.title,
// 		description: todo.description,
// 		done: false,
// 	});
// }

// function updateTodo(id, title, description) {
// 	// add to store

// 	let index = db.todos.findIndex(i => i.id == id);
// 	db.todos[index].title = title;
// 	db.todos[index].description = description;
// }

function deleteTodo(id) {
	let index = db.todos.findIndex(i => i.id == id);
	db.todos.splice(index, 1);
}

export default {
	getTodos,
	// setTodos,
	// addTodo,
	deleteTodo,
	// updateTodo,
};
