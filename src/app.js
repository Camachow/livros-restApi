import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await dbConnect();

connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
});

const app = express()
routes(app);

export default app