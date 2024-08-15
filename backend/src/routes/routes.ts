import { Router } from "express";
import { carrinhoController} from "../controllers/carrinhoController";
import  UsuarioController from "../controllers/usuario.controller";

const router = Router();

// carrinho
/*router.post("/carrinho", carrinhoController.create );
router.get("/carrinho/:idUsuario", carrinhoController.exibirCarrinho);
router.put("/addProduto_carrinho", carrinhoController.adicionarProdutoCarrinho );
router.put("/carrinho", carrinhoController.removerProdCarrinho ); //metodo http update ou delete? 
*/


// usuario
router.post("/usuario", UsuarioController.create);
router.get("/usuario/:id", UsuarioController.read);
router.put("/usuario/:id", UsuarioController.update);
router.delete("/usuario/:id", UsuarioController.delete);

export default router;