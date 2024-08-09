import {PrismaClient} from "@prisma/client";    //faz conexao entre as Models e as tabelas do Banco//
const prisma = new PrismaClient().carrinho;             //npx prisma generate para atualizar as tabelas do Banco//

class carrinhoController {
    public async create(request:Request, response: Response){
        try{
            const novoCarrinho = await prisma.carrinho.creat({
                data: {
                    produto,
                    cupom,
                    usuario:{
                        connect: {idUsuario: Number(idUsuario)}
                    }
                    Nome,
                    Valor,
                    CidadeOrigem,
                    Categoria,
                    Descricao,
                    Foto,
                    Avaliacao,
                    produto:{
                        connect: {idProduto: Number(idProduto)}
                    }
                select: {
                    Nome: true
                    Valor: true
                    CidadeOrigem:false
                    Categoria: true
                    Descricao:false
                    Foto: false
                    Avaliacao:false
                }
                }
                },
            });
        return response.status(201).json({
            message: "carrinho criado com sucesso"
        });
        }
        catch(error){
        return response.status(500).json({
            mensagemErro: "erro ao criar carrinho"})
        }

    }
export const carrinhoController = new carrinhoController();