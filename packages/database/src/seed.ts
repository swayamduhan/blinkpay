// basic usable seed for 2 users

import prisma from "."

async function main() {
  await prisma.user.createMany({
    data: [
        {
            id: 1,
            name: "Swayam Duhan",
            email: "swayam.duhan10@gmail.com",
            password: "1234"
        },
        {
            id: 2,
            name: "Yves Saint",
            email: "workplace.swayam@gmail.com",
            password: "1234"
        }
    ],
  })

  await prisma.wallets.createMany({
    data: [
        {
            user_id: 1,
            balance: 100000
        },
        {
            user_id: 2,
            balance: 50000
        }
    ]
  })
}

main()
  .then(async () => {
    console.log('🌱 Database has been seeded.')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
