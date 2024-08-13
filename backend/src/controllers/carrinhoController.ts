import {Prisma, PrismaClient} from "@prisma/client";    //faz conexao entre as Models e as tabelas do Banco//
import { Request, Response } from 'express';

const prisma = new PrismaClient();             //npx prisma generate para atualizar as tabelas do Banco//

//create carrinho
class CarrinhoController {
    public async create(request:Request, response: Response){
        try{
            const {id} = request.body;
            const usuario = await prisma.carrinho.findUnique({
                where: {idUsuario: Number(id)}
            })
            if (!usuario){
                return response.status(404).json({message: "Usuario não cadastrado"});

            }
            const novoCarrinho = await prisma.carrinho.create({
                data: { idUsuario: id,
                    usuario: {
                        connect: {idUsuario: Number(id)}
                    }
                }
            });
        
            return response.status(201).json({
            message: "carrinho criado com sucesso"
            });
    }   
        catch(error){
            return response.status(500).json({
                mensagemErro: "erro ao criar carrinho", error: error})
        }

    }

//read/get todos os produtos do carrinho

    public async readAll(request: Request, response: Response){
        try{
            
            const conteudoCarrinho = await prisma.carrinho.findMany();
            return response.status(200).json(conteudoCarrinho)
            
        }
        catch(error){
            return response.status(500).json({
                messageError: "carrinho não encontrato",
                error: error,
            });
        }

    }
    public async addProdutoCarrinho(request: Request, response: Response){
        try{
            
            const {idUsuario, idProduto} = request.body;
            const produtoCarrinho = await prisma.produtoCarrinho.findUnique({
                where: {idUsuario_idProduto: {idUsuario:idUsuario , idProduto: idProduto}}
            })
            if (!produtoCarrinho){
                let produtoCarrinhoInput: Prisma.ProdutoCarrinhoCreateInput={
                    carrinho: {
                        connect: {idUsuario: Number(idUsuario)}
                    },
                    produto: {
                        connect: {idProduto: Number(idProduto)}
                    } 
                }


                const addProduto = await prisma.produtoCarrinho.create({
                    data: {
                        produtoCarrinhoInput
                    }})
                    
                }
                
            
            
            
        }
        catch {
            
        }
    }

}
//update/put carrinho com produtos

//delete produto carrinho

export const carrinhoController = new CarrinhoController();

export { prisma };

