<template>
    <div
        @click="handle"
        class="border-1 border-gray w-20rem h-20rem rounded-2xl flex flex-col text-center justify-around">
        <strong class="text-2xl">{{ title }}</strong>
        <p>{{ desc }}</p>
    </div>
</template>

<script setup lang="ts">
    const { title, id, desc } = defineProps(["title", "desc", "id"]);
    const handle = () => {
        const { data, pending, error, refresh } = useFetch(`/api/${id}`, {
            method: "DELETE",
        });
    };
</script>
