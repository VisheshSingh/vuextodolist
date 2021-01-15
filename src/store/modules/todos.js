// import axios from 'axios';

import axios from 'axios';

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const mutations = {
  SET_TODOS: (state, payload) => (state.todos = payload),
  ADD_TODO: (state, payload) => state.todos.unshift(payload),
  DELETE_TODO: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  UPDATE_TODOS: (state, payload) => {
    const index = state.todos.findIndex((todo) => todo.id === payload.id);
    // console.log(index, payload);
    state.todos.splice(index, 1, payload);
  },
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    // console.log(response.data);
    commit('SET_TODOS', response.data);
  },

  async addTodo({ commit }, data) {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/todos`,
      { title: data, completed: false }
    );
    console.log(response.data);
    commit('ADD_TODO', response.data);
  },

  async removeTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('DELETE_TODO', id);
  },

  async filterTodos({ commit }, e) {
    const id = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${id}`
    );
    // console.log(response.data);
    commit('SET_TODOS', response.data);
  },

  async updateTodo({ commit }, updTodo) {
    // console.log(updTodo);
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );
    // console.log(response.data);
    commit('UPDATE_TODOS', response.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
