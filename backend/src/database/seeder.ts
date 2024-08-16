import { PrismaClient } from "@prisma/client";
import { productSeed } from "./models/productSeed"

const prisma = new PrismaClient()

async function main() {

    /* funcoes importadas */
    await productSeed()

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
