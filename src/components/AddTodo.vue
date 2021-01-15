<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="title" placeholder="Add Todo..." />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit() {
      this.addTodo(this.title);
    },
  },
};
</script>

<style>
form {
  display: flex;
}
input {
  padding: 10px;
  flex: 10;
  border: 1px solid #41b833;
  outline: 0;
}
button {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 0;
  cursor: pointer;
}
</style>
