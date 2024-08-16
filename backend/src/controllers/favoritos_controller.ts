import { PrismaClient, Prisma } from '@prisma/client';
import { Response, Request } from 'express';

const prismaClient = new PrismaClient();

class FavoritosController {

    public async create(req: Request, res: Response) {

        try {
            const { idUsuario } = req.params;

            let FavoritosInput: Prisma.FavoritosCreateInput = {
                usuario: {
                    connect: {
                        idUsuario: Number(idUsuario)
                    }
                }
            };

            const newFavoritos = await prismaClient.favoritos.create({
                data: FavoritosInput,
            });

            return res.status(201).json(newFavoritos);
        }
        catch (error: any) {
            return res.status(500).json({ error: error });
        }
    }

    public async addFavoritos(req: Request, res: Response) {
        try {
            const { idUsuario, idProduto } = req.body;

            let ProdutoFavoritosInput: Prisma.FavoritosCreateInput = {
                produto: {
                    connect: {
                        idProduto: Number(idProduto)
                    }
                }
            };

            const novoItemFavorito = await prismaClient.favoritos.update({
                where: {
                    idUsuario: Number(idUsuario)
                },
                data: {
                    produto: {
                        connect: {
                            idProduto: Number(idProduto)
                        }
                    }
                }
            });

            return res.status(201).json({ message: "Produto adicionado aos favoritos!" });
        }

        catch (error: any) {
            return res.status(500).json({ error: error });
        }
    }

    public async readAll(req: Request, res: Response) {
        try {

            const todosFavoritados = await prismaClient.favoritos.findMany();

            return res.status(200).json(todosFavoritados);
        }
        catch (error: any) {
            return res.status(500).json({ error: error });
        }
    }

    public async destroy(req: Request, res: Response) {

        try {

            const { idUsuario, idProduto } = req.body;

            const deletarproduto = await prismaClient.produto.findUnique({
                where: {
                    idProduto: idProduto,
                }
            });

            if (!deletarproduto) {
                return res.status(404).json({ error: "Produto não encontrado" });
            }

            const Favoritos_Atualizado = await prismaClient.favoritos.update({
                where: {
                    idUsuario: idUsuario,
                },
                data: {
                    produto: {
                        disconnect: { idProduto: idProduto },
                    },
                },
            })

            if (Favoritos_Atualizado) {
                return res.status(200).json({ message: "Produto removido dos favoritos com sucesso" });
            } else {
                return res.status(500).json({ error: "Erro ao remover o produto dos favoritos" });
            }

        }
        catch (error: any) {
            return res.status(500).json({ error: "Erro ao deletar o produto dos favoritos" });
        }
    }
}

export default new FavoritosController();