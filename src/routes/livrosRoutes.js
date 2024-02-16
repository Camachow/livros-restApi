import express from "express";
import LivroController from "../controllers/livroController";

const router = express.Router();

router.get("/livros", LivroController.getLivros);