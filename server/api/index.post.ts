import prisma from "~/utils/db";

export default defineEventHandler(async (event) => {
    let todo = await readBody(event);
    await prisma.todo.create({
        data: todo,
    });
    return "added";
});
