import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js"

class LivroController {

    static async getLivros(req, res) {
        try {
            const listaLivros = await livro.find();
            res.status(200).json(listaLivros);
        }catch{(error)
            console.error("Erro ao buscar livros:", error);
            res.status(500).send("Erro ao buscar livros.");
        }
    }

    static async getLivroById(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }catch(error){
            console.error("Erro ao buscar livro:", error);
            res.status(500).send("Erro ao buscar livro.");
        }
    }

    static async createLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            console.log(autorEncontrado._doc);
            const livroCompleto = {... novoLivro, autor: {...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({ message: "Criado com sucesso", livro: livroCriado});
        }catch(error){
            console.error("Erro ao criar livro:", error);
            res.status(500).send("Erro ao criar livro.");
        }
    }

    static async updateLivro(req, res) {
        const id = req.params.id;
        try {
            const novoLivro = req.body;
            if(novoLivro.autor){
                const autorEncontrado = await autor.findById(novoLivro.autor);
                novoLivro.autor = autorEncontrado;
            }
            const livroAtualizado = await livro.findByIdAndUpdate
            (id, novoLivro, {new: true});
            res.status(200).json(livroAtualizado);
        }
        catch(error){
            console.error("Erro ao atualizar livro:", error);
            res.status(500).send("Erro ao atualizar livro.");
        }
    }

    static async deleteLivro(req, res) {
        try {
            id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro removido com sucesso"});
        }catch(error){
            console.error("Erro ao remover livro:", error);
            res.status(500).send("Erro ao remover livro.");
        }
    }

    static async getLivrosByEditora(req, res) {
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await livro.find({ editora : editora});
            res.status(200).json(livrosPorEditora);
        } catch(error) {
            console.error("Erro ao buscar livros por editora:", error);
            res.status(500).send("Erro ao buscar livros por editora.");
        }
    }
};

export default LivroController;