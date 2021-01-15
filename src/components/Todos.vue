<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        @dblclick="completeTodo(todo)"
        :class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <span class="del" @click="removeTodo(todo.id)">X</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Todos',
  computed: {
    ...mapGetters(['allTodos']),
  },
  methods: {
    ...mapActions(['fetchTodos', 'removeTodo', 'updateTodo']),
    completeTodo(todo) {
      const updTodo = {
        ...todo,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
    },
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  background: #41b883;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.del {
  position: absolute;
  top: 5px;
  right: 5px;
  color: #fff;
  cursor: pointer;
}

.is-complete {
  background: #444;
  color: #fff;
}
</style>
