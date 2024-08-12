import { Router } from "express";
import { carrinhoController, userController } from "../controllers/carrinhoController";

const router = Router();

// carrinho
router.post("/carrinho", carrinhoController.create );
router.get("/carrinho", carrinhoController.read);


export default router;