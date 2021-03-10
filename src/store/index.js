import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "1)",
      },
      {
        id: 2,
        title: "2)",
      },
      {
        id: 3,
        title: "3)",
      },
      {
        id: 4,
        title: "4)",
      }
    ]
  },
  getters: {
    allTodos: (state) => state.todos
  },
  mutations: {
    add_todo(state,todo) {
      state.todos.push(todo);
    },
    delete_Todo(state,id) {
      state.todos = state.todos.filter(todo=>todo.id !=id)
    },
    update_Todo(state,todo) {
      let index = state.todos.findIndex(t => t.id == todo.id);
      if (index != -1) {
        state.todos[index] = todo;
      }
    }
  },
  actions: {
    addTodo({commit},todo) {
      commit('add_todo',todo);
    },
    deleteTodo({commit}, id){
      commit("delete_Todo", id);
    },
    updateTodo({commit},todo) {
      commit("update_Todo",todo)
    }
  },
  modules: {
  }
})
