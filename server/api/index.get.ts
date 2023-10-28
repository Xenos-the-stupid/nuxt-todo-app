import prisma from "~/utils/db";

export default defineEventHandler(async (event) => {
    let todos = await prisma.todo.findMany();
    return {
        todos,
    };
});
