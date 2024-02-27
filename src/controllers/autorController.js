import { autor } from "../models/Autor.js";

class AutorController {

    static async getAutores(req, res) {
        try {
            const listaAutores = await autor.find();
            res.status(200).json(listaAutores);
        }catch(error){
            console.error("Erro ao buscar autores:", error);
            res.status(500).send("Erro ao buscar autores.");
        }
    }

    static async getAutorById(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        }catch(error){
            console.error("Erro ao buscar autor:", error);
            res.status(500).send("Erro ao buscar autor.");
        }
    }

    static async createAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: novoAutor});
        }catch(error){
            console.error("Erro ao criar autor:", error);
            res.status(500).send("Erro ao criar autor.");
        }
    }

    static async updateAutor(req, res) {
        try {
            const id = req.params.id;
            const novoAutor = await autor.findByIdAndUpdate
            (id, req.body, {new: true});
            res.status(200).json(novoAutor);
        }
        catch(error){
            console.error("Erro ao atualizar autor:", error);
            res.status(500).send("Erro ao atualizar autor.");
        }
    }

    static async deleteAutor(req, res) {
        try {
            id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor removido com sucesso"});
        }catch(error){
            console.error("Erro ao remover autor:", error);
            res.status(500).send("Erro ao remover autor.");
        }
    }

};

export default AutorController;