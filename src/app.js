import express from "express";
import dbConnect from "./config/dbConnect.js";
import livro from "./models/Livro.js"

const connection = await dbConnect();

connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
});

const app = express()

// Middleware para parsear o corpo das requisições JSON
app.use(express.json());

function findBookById(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
    try {
        const listaLivros = await livro.find();
        res.status(200).json(listaLivros);
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        res.status(500).send("Erro ao buscar livros.");
    }
});

app.get("/livros/:id", (req, res) => {
    const index = findBookById(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.status(201).json(livro);
});

app.put("/livros/:id", (req, res) => {
    const index = findBookById(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
});

app.delete("/livros/:id", (req, res) => {
    const index = findBookById(req.params.id);
    livros.splice(index, 1);
    res.status(200).json({message: "Livro removido com sucesso"});
});

export default app