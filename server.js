import "dotenv/config.js"; // Importa as variáveis de ambiente. Deve ser feito no início do projeto
import app from "./src/app.js"

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});