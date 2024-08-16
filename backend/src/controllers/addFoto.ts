import {Prisma, PrismaClient} from "@prisma/client";    //faz conexao entre as Models e as tabelas do Banco//
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export class addFotoController {
    public static async  addPictureClass(request: Request, response: Response){
        try {
            const { idProduto } = request.params;
            if (!request.file){
                return response.status(400).json({message: "Upload da foto não realizado "})
            }
            const path = '/uploads/' + request.file.filename;
            
            
            const updatedClass = await prisma.produto.update({
                where: { idProduto: parseInt(id) },
                data: { Foto:{ push: path }},
    
            }); 
            return response.status(200).json(updatedClass);
        }   
        catch (error) {
            response.status(500).json({ error: 'Erro ao adicionar imagem.'})
        }
    
    }


}



