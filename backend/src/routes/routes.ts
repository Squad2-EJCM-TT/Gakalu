import Router from "express";
import ProductController from "../controllers/produto_controller";
import favoritos_controller from "../controllers/favoritos_controller";
const router = Router();

router.post("/produto/:idUsuario", ProductController.create);
router.get("/produto-achado/:idProduto", ProductController.read);
router.get("/produtos-achados", ProductController.readAll);
router.put("/produto-atualizado/:idProduto", ProductController.update);
router.delete("/produto-excluido/:idProduto", ProductController.destroy);

router.post("/favoritos/:idUsuario", favoritos_controller.create);
router.post("/novoproduto-favoritos", favoritos_controller.addFavoritos);
router.get("/todosfavoritados", ProductController.readAll);
router.delete("/produtoexcluido-favoritos", ProductController.destroy);

export default router;
