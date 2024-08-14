import { Router } from "express";
import { carrinhoController } from "../controllers/carrinhoController";

const router = Router();

// carrinho
router.post("/carrinho", carrinhoController.create );
router.get("/carrinho/:idUsuario", carrinhoController.readAll);
addProdutoCarrinho


export default router;