import { Router } from "express";
import { carrinhoController} from "../controllers/carrinhoController";
import  UsuarioController from "../controllers/usuario.controller";

const router = Router();

// carrinho
/*router.post("/carrinho", carrinhoController.create );
router.get("/carrinho", carrinhoController.read);*/


// usuario
router.post("/usuario", UsuarioController.create);
router.get("/usuario/:id", UsuarioController.read);
router.put("/usuario/:id", UsuarioController.update);
router.delete("/usuario/:id", UsuarioController.delete);

export default router;