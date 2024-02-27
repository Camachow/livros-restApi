import express from "express";
import AutorController from "../controllers/autorController.js";

const router = express.Router();

router.get("/autores", AutorController.getAutores);
router.get("/autores/:id", AutorController.getAutorById);

router.post("/autores", AutorController.createAutor);

router.put("/autores/:id", AutorController.updateAutor);

router.delete("/autores/:id", AutorController.deleteAutor);

export default router;