import Vue from 'vue';
import Vuex from 'vuex';
import todoEndpoint from '../endpoints/todosEndpoint';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: todoEndpoint.getTodos(),
	},
	mutations: {
		ADD_TODO(state, payload) {
			let id = state.todos.length;
			getIndex();
			function getIndex() {
				let item = state.todos.find(el => el.id == id);
				if (item) {
					id++;
					getIndex();
				}
			}
			let newTodo = {
				id: id,
				title: payload.title,
				description: payload.description,
				done: false,
				priority: payload.priority,
			};
			state.todos.push(newTodo);
		},
		SET_TODOS(state, payload) {
			state.todos = payload;
		},
		UPDATE_TODO(state, payload) {
			let index = state.todos.findIndex(t => t.id == payload.id);
			state.todos[index].title = payload.title;
			state.todos[index].description = payload.description;
			state.todos[index].done = payload.done;
			state.todos[index].priority = payload.priority;
		},
		DELETE_TODO(state, id) {
			let index = state.todos.findIndex(i => i.id == id);
			state.todos.splice(index, 1);
		},
	},
	actions: {
		addTodo({ commit }, todo) {
			commit('ADD_TODO', todo);
		},
		setTodos({ commit }, todoArray) {
			commit('SET_TODOS', todoArray);
		},
		updateTodo({ commit }, todo) {
			commit('UPDATE_TODO', todo);
		},
		deleteTodo({ commit }, id) {
			commit('DELETE_TODO', id);
		},
	},
	modules: {},
});
