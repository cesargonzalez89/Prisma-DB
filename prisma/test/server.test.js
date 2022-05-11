// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

describe("Test para server", () => {

    test("Test 1: Calcular todos los explorers en la base de datos", async () => {
        const allExplorers =  await prisma.explorer.findMany({});
        expect(allExplorers.length).toBe(6);
    });

    test("Test 2: Calcular todos los mission commander en la base de datos", async () => {
        const allExplorers =  await prisma.missionCommander.findMany({});
        expect(allExplorers.length).toBe(4);
    });

});