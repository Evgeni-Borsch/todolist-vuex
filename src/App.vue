<template>
  <div id="app" class="container">
    <div class="wrapper">
      <todoInput/>
      <todoList/>
    </div>
  </div>
</template>

<script>
import todoInput from "./components/todoInput"
import todoList from "./components/todoList"

export default {
  name: 'App',
  components: {
    todoInput,
    todoList
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-radius: #2c3e50;
}
</style>
