
import { Router } from "express";
import { carrinhoController} from "../controllers/carrinhoController";
import  UsuarioController from "../controllers/usuario.controller";
import ProductController from "../controllers/produto_controller";
import favoritos_controller from "../controllers/favoritos_controller";

const router = Router();

// carrinho
/*router.post("/carrinho", carrinhoController.create );
router.get("/carrinho", carrinhoController.read);*/

router.post("/produto/:idUsuario", ProductController.create);
router.get("/produto-achado/:idProduto", ProductController.read);
router.get("/produtos-achados", ProductController.readAll);
router.put("/produto-atualizado/:idProduto", ProductController.update);
router.delete("/produto-excluido/:idProduto", ProductController.destroy);

router.post("/favoritos/:idUsuario", favoritos_controller.create);
router.post("/novoproduto-favoritos", favoritos_controller.addFavoritos);
router.get("/todosfavoritados", ProductController.readAll);
router.delete("/produtoexcluido-favoritos", ProductController.destroy);

// usuario
router.post("/usuario", UsuarioController.create);
router.get("/usuario/:id", UsuarioController.read);
router.put("/usuario/:id", UsuarioController.update);
router.delete("/usuario/:id", UsuarioController.delete);

export default router;
