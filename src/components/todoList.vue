<template>
    <div>
        <div v-for="todo in allTodos" :key="todo.id">
            <todoItem :todo="todo" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import todoItem from "./todoItem"
export default {
    components: {
        todoItem
    },
    computed: {
        ...mapGetters(["allTodos"])
    }
}
</script>

<style>

</style>