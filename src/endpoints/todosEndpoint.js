import db from '../db/db';

function getTodos() {
	return db.todos;
}

function addTodo(todo) {
	db.todos.push({
		id: db.todos.length,
		title: todo.title,
		description: todo.description,
		done: false,
	});
}

function deleteTodo(id) {
	console.log(db.todos);
	let index = db.todos.indexOf(id == id);
	db.todos.splice(index, 1);
	console.log(db.todos);
}

export default {
	getTodos,
	addTodo,
	deleteTodo,
};
