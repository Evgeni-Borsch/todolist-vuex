<template>
    <div>
        <div class="row my-3 justify-content-between">
            <h3 v-if="!editing">{{ todo.title }}</h3>
            <input 
                v-bind:value="todoText" 
                @change="todoTextChange"
                v-else 
                type="text" 
                class="col inputStyle"
                @keyup.enter="updateTodoI(todo)"
            />
            <div>
                <button @click="updateTodoI(todo)" class="btn floating-button mx-2">{{ editing?'Update':'Edit' }}</button>
                <button @click="deleteTodo(todo.id)" class="btn floating-button floating-button-delete">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:{
        todo: {}
    },
    data(){ 
        return {
            todoText: '',
            editing: false
        };
    },
    methods: {
        ...mapActions(['deleteTodo', 'updateTodo']),
        todoTextChange(e){
            this.todoText = e.target.value;
        },
        updateTodoI(todo){
            this.editing = this.editing == true ? false : true;
            if(this.editing) {
                this.todoText = todo.title;
                this.updateTodo(todo);
            } else {
                todo.title = this.todoText;
            }
        }
    },
}
</script>

<style>

</style>