<template>
    <div responsive>
        <div class="text-2xl my-8 flex justify-between items-center">
            <strong>Todos</strong>
            <div>12</div>
        </div>
        <div class="grid grid-cols-4 gap-30px">
            <Card
                v-for="todo in todos?.todos"
                :key="todo.id"
                :title="todo.title"
                :desc="todo.desc"
                :id="todo.id" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { data: todos, pending, error, refresh } = useFetch("/api");
</script>
