
import { Router } from "express";
import { carrinhoController} from "../controllers/carrinhoController";
import  UsuarioController from "../controllers/usuario.controller";
import { photoUpload} from "../config/uploader"
import { addFotoController } from "../controllers/addFoto"
import ProductController from "../controllers/produto_controller";
import favoritos_controller from "../controllers/favoritos_controller";
const router = Router();

// carrinho
router.post("/carrinho", carrinhoController.create );
router.get("/carrinho/:idUsuario", carrinhoController.exibirCarrinho);
router.put("/addProduto_carrinho", carrinhoController.adicionarProdutoCarrinho );
router.put("/carrinho", carrinhoController.removerProdCarrinho ); //metodo http update ou delete? 


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
router.delete("/usuario/:idProduto", UsuarioController.delete);

//multer
router.put("/uploads/:id",photoUpload.single('image'), addFotoController.addPictureClass )

export default router;
