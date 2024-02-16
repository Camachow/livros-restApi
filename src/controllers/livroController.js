import livro from "../models/Livro.js";

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
            const livro = await livro.findById(req.params.id);
            res.status(200).json(livro);
        }catch(error){
            console.error("Erro ao buscar livro:", error);
            res.status(500).send("Erro ao buscar livro.");
        }
    }

    static async createLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json(novoLivro);
        }catch(error){
            console.error("Erro ao criar livro:", error);
            res.status(500).send("Erro ao criar livro.");
        }
    }

    static async updateLivro(req, res) {
        try {
            const livro = await livro.findByIdAndUpdate
            (req.params.id, req.body, {new: true});
            res.status(200).json(livro);
        }
        catch(error){
            console.error("Erro ao atualizar livro:", error);
            res.status(500).send("Erro ao atualizar livro.");
        }
    }

    static async deleteLivro(req, res) {
        try {
            await livro.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "Livro removido com sucesso"});
        }catch(error){
            console.error("Erro ao remover livro:", error);
            res.status(500).send("Erro ao remover livro.");
        }
    }

};

export default LivroController;