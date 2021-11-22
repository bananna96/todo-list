import Vue from 'vue';
import Vuex from 'vuex';
import todoEndpoint from '../endpoints/todosEndpoint';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: todoEndpoint.getTodos(),
	},
	mutations: {
		SET_TODOS(state, payload) {
			state.todos = payload;
		},
	},
	actions: {
		setTodos({ commit }, todoArray) {
			commit('SET_TODOS', todoArray);
		},
	},
	modules: {},
});
