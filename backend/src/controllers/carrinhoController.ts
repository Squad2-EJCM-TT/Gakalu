import {Prisma, PrismaClient} from "@prisma/client";    //faz conexao entre as Models e as tabelas do Banco//
import { Request, Response } from 'express';

const prisma = new PrismaClient();             //npx prisma generate para atualizar as tabelas do Banco//

//create carrinho
class CarrinhoController {
    public async create(request:Request, response: Response){
        try{
            const {id} = request.body;
            const usuariocarrinho = await prisma.carrinho.findUnique({
                where: {idUsuario: Number(id)}
            })
            if (!usuariocarrinho){
                return response.status(404).json({message: "Usuario não cadastrado. Cadastre-se para aproveitar as ofertas!"});

            }
            let carrinhoDOUsuario: Prisma.CarrinhoCreateInput = {
                usuario: {
                    connect: { idUsuario: Number(id) }
                },
                quantProdutos: 0,
                valorTotal: 0
            }
            const novoCarrinho = await prisma.carrinho.create({
                data: carrinhoDOUsuario 
            });
        
            return response.status(201).json({
            message: "carrinho criado com sucesso",novoCarrinho
            });
    }   
        catch(error){
            return response.status(500).json({
                mensagemErro: "erro ao criar carrinho", error: error})
        }

    }

    public async addProdutoCarrinho(request: Request, response: Response){
        try{
            
            const {idUsuario, idProduto, quantidadeMesmoProduto} = request.body;
            const produtoCarrinho = await prisma.produtoCarrinho.findUnique({
                where: {idUsuario_idProduto: {idUsuario:idUsuario , idProduto: idProduto}}
            })
            if (!produtoCarrinho){
                let produtocarrinhoInput: Prisma.ProdutoCarrinhoCreateInput={
                    carrinho: {
                        connect: { idUsuario: Number(idUsuario) }
                    },
                    produto: {
                        connect: { idProduto: Number(idProduto) }
                    },
                    quantidadeMesmoProduto: 0
                }
            }

            else{
                const addProdutoCarrinho = await prisma.produtoCarrinho.upsert({
                    where: { idUsuario_idProduto: { idUsuario: idUsuario, idProduto: idProduto } },
                    update: {quantidadeMesmoProduto: {increment: quantidadeMesmoProduto}},
                    create: produtocarrinhoInput
                });
                const valorProd = await prisma.produto.findUnique({
                    where: {idProduto: parseInt(idProduto)}
                });
                async function atualizarValorTotalCarrinho(idUsuario: number ,quantidadeMesmoProduto:number){
                    return prisma.carrinho.update({
                        where: {idUsuario: idUsuario},
                        data: {valorTotal: {increment: quantidadeMesmoProduto * Number(valorProd) }}
                    });
                }
                atualizarValorTotalCarrinho(idUsuario, quantidadeMesmoProduto);

                return response.status(201).json(addProdutoCarrinho);
                
                }   
                
            
            
            
        }
        catch(error){
            return response.status(500).json({
                mensagemErro: "erro ao adicionar produto ao carrinho!", error: error})
        }
    }
//read/get todos os produtos do carrinho

    public async readAll(request: Request, response: Response){
        try{
            const {idUsuario}=request.params;

            const conteudoCarrinho = await prisma.carrinho.findUnique({
                where: {idUsuario: parseInt(idUsuario) },
                include: {produto:true},
            });
            return response.status(200).json(conteudoCarrinho);
        }
            
        
        catch(error){
            console.error(error);
            return response.status(500).json({
                error: "carrinho não encontrato"
            });
        }

    }
    

    async removerProdCarrinho(request: Request, response:Response) {
        try {
            const { idUsuario, idProduto, quantProdRepetidos} =request.body;
            const produtoRemover = await prisma.produto.findUnique({
                where: {idProduto: parseInt(idProduto)},
            });
            await prisma.produtoCarrinho.update({
                where: { idUsuario_idProduto: {idUsuario: Number(idUsuario),idProduto: Number(idProduto)}}, 
                data: { quantidadeMesmoProduto: {decrement: Number(quantidadeMesmoProduto)}},
            });
            async function atualizarValorTotalCarrinho(idUsuario: number) {
                return prisma.carrinho.update({
                    where: { idUsuario: idUsuario},
                    data: {valorTotal: {decrement: Number(produtoRemover?.Valor) * Number(quantidadeMesmoProduto)}},

                });
            }


        }

        catch {

        }


    }
}

//delete produto carrinho

export const carrinhoController = new CarrinhoController();

export { prisma };

