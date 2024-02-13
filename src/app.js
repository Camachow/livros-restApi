import express from "express"

const app = express()

// Middleware para parsear o corpo das requisições JSON
app.use(express.json());

const livros =[
    {
        id: 1,
        titulo: "Lord of Rings"
    },
    {
        id: 2,
        titulo: "o Hobbit"
    },    
]

function findBookById(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros/:id", (req, res) => {
    const index = findBookById(req.params.id);
    res.status(200).json(livros[index]);
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
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