<template>
        <div class="row">
            <input 
                @change="todoTextChange" 
                v-bind:value="todoText" 
                class="col inputStyle mr-2" 
                type="text" 
                @keyup.enter="addTodoI"
            />
            <button @click="addTodoI" class="btn floating-button">Add</button>
        </div>
</template>

<script>
import { mapActions } from "vuex";
import {v1} from "uuid";

export default {
    data(){
        return{
            todoText: "Введите задачу",
        };
    },
    methods: {
        ...mapActions(["addTodo"]),
        todoTextChange(e){
            this.todoText = e.target.value;
        },
        addTodoI(){
            this.addTodo({
                id: v1(),
                title: this.todoText
            });
            this.todoText = "";
        }
    }
}
</script>

<style>
* {
    font-family: 'Times New Roman', bold, serif;
    font-size: 16px;
    box-sizing: border-box;
}
.inputStyle { 
    box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #000000;
    background-color: rgba(5, 2, 3, 0.1);
    background-clip: padding-box;
    border: 1px solid #000;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.floating-button {
  text-decoration: none;
  width: 100px;
  height: 40px;
  margin: 0px 20px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .2s;
}
.floating-button:hover {
  background: #2EE59D;
  box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
  color: white;
  transform: translateY(-7px);
}
.floating-button-delete:hover {
  background: #ff0101;
  box-shadow: 0 15px 20px rgba(255, 5, 5, 0.4);
  color: white;
  transform: translateY(-7px);   
}
</style>