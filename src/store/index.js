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
			state.todos.push({
				id: id,
				title: payload.title,
				description: payload.description,
				done: false,
			});
		},
		SET_TODOS(state, payload) {
			state.todos = payload;
		},
		UPDATE_TODO(state, payload) {
			let index = state.todos.findIndex(t => t.id == payload.id);
			state.todos[index].title = payload.title;
			state.todos[index].description = payload.description;
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
	},
	modules: {},
});
