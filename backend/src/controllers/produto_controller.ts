import { PrismaClient, Prisma } from '@prisma/client';
import { Response, Request } from 'express';

const prismaClient = new PrismaClient();

interface Produto {
    Nome: string;
    Valor: number;
    Categoria: string;
    Descricao: string;
    Foto: string;
    Avaliacao: string;
}

class ProductController {
    public async create(req: Request, res: Response) {

        try {
            const { Nome, Valor, CidadeOrigem, Categoria, Descricao, Foto, Avaliacao } = req.body;

            const { idUsuario } = req.params;

            let produtoInput: Prisma.ProdutoCreateInput = {
                Nome: Nome,
                Valor: Valor,
                CidadeOrigem: CidadeOrigem,
                Categoria: Categoria,
                Descricao: Descricao,
                Foto: Foto,
                Avaliacao: Avaliacao,
                usuario: {
                    connect: {
                        idUsuario: Number(idUsuario),
                    },
                },
            };

            const product = await prismaClient.produto.create({
                data: produtoInput,
            });

            return res.status(201).json({
                message: "Produto criado com sucesso",
                produto: product,
            });
        }
        catch (error: any) {
            return res.status(500).json(error);

        }
    }

    public async read(req: Request, res: Response) {

        try {

            const { idProduto } = req.params;

            const produto_achado = await prismaClient.produto.findUnique({
                where: {
                    idProduto: Number(idProduto)
                },

                select: {
                    Nome: true,
                    Valor: true,
                    CidadeOrigem: false,
                    Categoria: true,
                    Descricao: true,
                    Foto: true,
                    Avaliacao: true,
                    usuario: false,
                }
            });

            if (!produto_achado) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }

            return res.status(200).json(produto_achado);
        }
        catch (error) {
            return res.status(500).json({
                messageError: "Erro ao procurar o produto desejado.",
                error: error,
            });
        }
    }

    public async readAll(req: Request, res: Response) {

        try {
            const achados = await prismaClient.produto.findMany({
                select: {
                    idProduto: true,
                    Nome: true,
                    Valor: true,
                    CidadeOrigem: false,
                    Categoria: true,
                    Descricao: true,
                    Foto: true,
                    Avaliacao: true,
                    usuario: false,
                }
            });
            return res.status(200).json(achados);
        }
        catch (error) {
            return res.status(500).json({
                messageError: "Erro ao encontrar os produtos",
                error: error,
            });
        }
    }

    public async update(req: Request, res: Response) {

        try {
            const { idProduto } = req.params;

            const {
                Nome, Valor, CidadeOrigem, Categoria, Descricao, Foto, Avaliacao } = req.body;

            let productInput: Prisma.ProdutoUpdateInput = {
                Nome: Nome,
                Valor: Valor,
                CidadeOrigem: CidadeOrigem,
                Categoria: Categoria,
                Descricao: Descricao,
                Foto: Foto,
                Avaliacao: Avaliacao,
            };

            const updatedProduto = await prismaClient.produto.update({
                where: { idProduto: Number(idProduto), },
                data: productInput,
            });

            if (updatedProduto) {
                const produto = await prismaClient.produto.findUnique({
                    where: {
                        idProduto: Number(idProduto),
                    },
                });
                return res.status(201).json(produto);
            }

            else {
                return res.status(404).json({ error: "Produto não encontrado" });
            }
        }

        catch (error: any) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    public async destroy(req: Request, res: Response) {

        try {
            const { idProduto } = req.params;
            const produto_deletado = await prismaClient.produto.delete({
                where: { idProduto: Number(idProduto) }
            })

            if (produto_deletado) {
                res.status(200).json(produto_deletado);
            }
            else {
                return res.status(404).json({ error: "Produto não encontrado" });
            }
        }

        catch (error: any) {
            res.status(500).json({ error: error });
        }

    }

}

export default new ProductController();