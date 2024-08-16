import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class UsuarioController {
    // Método para criar um novo usuário
    static async create(req: Request, res: Response) {
        const { nome, email, bairro, CEP, cidade, role, senha } = req.body;
        try {
            let usuarioInput: Prisma.UsuarioCreateInput ={
                nome, 
                email, 
                bairro, 
                CEP: Number(CEP), 
                cidade, 
                role, 
                hesh: senha,
                salt: "salt"
            }

            const newUsuario = await prisma.usuario.create({
                data:usuarioInput
            });
            return res.status(201).json({
                message: "Usuário criado com sucesso!",
                data: newUsuario,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao criar usuário",
                error: error,
            });
        }
    }

    // Método para obter um usuário pelo ID
    static async read(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuario = await prisma.usuario.findUnique({
                where: { idUsuario: Number(id) },
            });
            if (!usuario) {
                return res.status(404).json({
                    message: "Usuário não encontrado",
                });
            }
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao obter usuário",
                error: error,
            });
        }
    }

    // Método para atualizar um usuário pelo ID
    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { nome, email, bairro, CEP, cidade, role } = req.body;
            const updatedUsuario = await prisma.usuario.update({
                where: { idUsuario: Number(id) },
                data: {
                    nome,
                    email,
                    bairro,
                    CEP,
                    cidade,
                    role,
                },
            });
            return res.status(200).json({
                message: "Usuário atualizado com sucesso!",
                data: updatedUsuario,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao atualizar usuário",
                error: error,
            });
        }
    }

    // Método para deletar um usuário pelo ID
    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await prisma.usuario.delete({
                where: { idUsuario: Number(id) },
            });
            return res.status(200).json({
                message: "Usuário deletado com sucesso!",
            });
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao deletar usuário",
                error: error,
            });
        }
    }
}

export default UsuarioController;