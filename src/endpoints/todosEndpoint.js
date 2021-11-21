import db from '../db/db';

function getTodos() {
	return db.todos;
}

function setTodos(todos) {
	db.todos = todos;
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
	let index = db.todos.indexOf(id == id);
	db.todos.splice(index, 1);
}

export default {
	getTodos,
	setTodos,
	addTodo,
	deleteTodo,
};
