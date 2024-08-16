import { Router } from "express";
import { carrinhoController} from "../controllers/carrinhoController";
import  UsuarioController from "../controllers/usuario.controller";
import { photoUpload} from "../config/uploader"
import { addFotoController } from "../controllers/addFoto"
const router = Router();

// carrinho
router.post("/carrinho", carrinhoController.create );
router.get("/carrinho/:idUsuario", carrinhoController.exibirCarrinho);
router.put("/addProduto_carrinho", carrinhoController.adicionarProdutoCarrinho );
router.put("/carrinho", carrinhoController.removerProdCarrinho ); //metodo http update ou delete? 



// usuario
router.post("/usuario", UsuarioController.create);
router.get("/usuario/:id", UsuarioController.read);
router.put("/usuario/:id", UsuarioController.update);
router.delete("/usuario/:idProduto", UsuarioController.delete);

//multer
router.put("/uploads/:id",photoUpload.single('image'), addFotoController.addPictureClass )

export default router;