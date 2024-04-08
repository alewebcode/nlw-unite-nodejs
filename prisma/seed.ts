import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: '17bb46da-a19f-46d8-8f34-e28dfe0d9c0b',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento p/ devs apaixonados por código!',
            maximumAttendees: 120
        }

    })
}


seed().then(() => {
    prisma.$disconnect()
})