<template>
    <div>
        <form
            @submit.prevent="submit"
            class="mt-10 flex flex-col gap-30px items-center justify-center">
            <input
                type="text"
                placeholder="add todo"
                class="bg-transparent rounded-md px-7 py-2 border-1 border-gray"
                v-model="title" />
            <textarea
                name=""
                id=""
                cols="30"
                class="bg-transparent rounded-md px-7 py-2 border-1 border-gray"
                rows="6"
                placeholder="todo description"
                v-model="desc" />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
    const title = ref("");
    const desc = ref("");
    const submit = async () => {
        const { data, pending, error, refresh } = useFetch("/api", {
            method: "POST",
            body: {
                title,
                desc,
            },
        });
        title.value = "";
        desc.value = "";
    };
</script>
