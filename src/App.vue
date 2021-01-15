<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
import FilterTodos from './components/FilterTodos';

export default {
  name: 'App',
  components: {
    Todos,
    FilterTodos,
    AddTodo,
  },
};
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background: #e8f7f0;
  line-height: 1.6;
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 0 2rem;
  overflow: auto;
}
</style>
