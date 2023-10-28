<template>
    <nav class="w-full h-80px">
        <div class="responsive flex items-center justify-between h-full">
            <strong class="text-(3xl cyan)">TODO APP</strong>
            <div>
                <ul class="flex gap-50px text-xl">
                    <li class="hover:(scale-110 text-cyan) duration-400">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li class="hover:(scale-110 text-cyan) duration-400">
                        <NuxtLink to="/add-todo">Add</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
