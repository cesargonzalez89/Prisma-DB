const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const mission1 = await prisma.mission.upsert({
        where: { name: 'node' },
        update: {},
        create: {
            name: 'node',
            lang: 'node',
            missionCommander: 'Carlo',
            enrollments: 900 
        },
      });
  
      const mission2 = await prisma.mission.upsert({
        where: { name: 'java' },
        update: {},
        create: {
            name: 'java',
            lang: 'java',
            missionCommander: 'Fernanda',
            enrollments: 400 
        },
      });

      const missionCommander1 = await prisma.missionCommander.upsert({
        where: { username: 'carloInovaccion' },
        update: {},
        create: {
            name: 'Carlo',
            username: 'carloInovaccion',
            mainStack: 'elixir',
            currentEnrollment: true,
            hasAzureCertification: true
        },
      });

      const missionCommander2 = await prisma.missionCommander.upsert({
        where: { username: 'ferInovaccion' },
        update: {},
        create: {
            name: 'Fernanda',
            username: 'ferInovaccion',
            mainStack: 'java',
            currentEnrollment: false,
            hasAzureCertification: false
        },
      });

    console.log('Create 3 explorers');
    console.log('Create 2 missions');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();