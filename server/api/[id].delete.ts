import prisma from "~/utils/db";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "id");
    await prisma.todo.delete({ where: { id } });
    return "deleted";
});
