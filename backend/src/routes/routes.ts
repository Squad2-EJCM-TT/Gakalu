import { Router } from "express";
import { carrinhoController } from "../controllers/carrinhoController";

const router = Router();

// carrinho
router.post("/carrinho", carrinhoController.create );
router.get("/carrinho/:idUsuario", carrinhoController.exibirCarrinho);
router.put("/addProduto_carrinho", carrinhoController.adicionarProdutoCarrinho );
router.put("/carrinho", carrinhoController.removerProdCarrinho ); //metodo http update ou delete? 



export default router;