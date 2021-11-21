import db from '../db/db';

function getTodos() {
	return db.todos;
}

export default {
	getTodos,
};
