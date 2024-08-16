import { PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker/locale/pt_BR"

const prisma = new PrismaClient()

interface Produto {
    Nome: string;
    Valor: number;
    CidadeOrigem: string;
    Categoria: string[];
    Descricao: string;
    Foto: string[];
    Avaliacao: number;
    idUsuario: number;
}

const categorias = [
    'Eletrônicos',
    'Celulares',
    'Jogos',
    'Peças de computadores',
    'Headphones',
    'Fone de ouvido',
];

let data: Produto[] = []

export async function productSeed() {

    for (let i = 0; i < 50; i++) {
        await prisma.produto.create({
            data: {
                Nome: faker.commerce.productName(),
                Valor: parseFloat(faker.commerce.price()),
                CidadeOrigem: faker.location.city(),
                Categoria: faker.helpers.arrayElements(categorias, faker.number.float({ min: 1, max: 3 })),
                Descricao: faker.commerce.productDescription(),
                Foto: [faker.image.urlLoremFlickr({ category: 'technology' })],
                Avaliacao: faker.number.float({ min: 1, max: 5 }),
                usuario: {
                    create: {
                        nome: faker.person.fullName(),
                        role: "VENDEDOR",
                        email: faker.internet.email(),
                        CEP: faker.number.int({ min: 10000, max: 99999 }),
                        bairro: faker.location.city(),
                        cidade: faker.location.city(),
                        hesh: faker.string.alphanumeric(),
                        salt: faker.string.alphanumeric(),
                    }
                }
            }
        })
    }
}