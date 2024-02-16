import { Int32 } from 'mongodb';
import mongoose from 'mongoose';

const livrosSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {
        type: String,
        required: true
    },
    editora: {
        type: String,
    },
    preco: {
        type: Number,
    },
    paginas: {
        type: Number,
    },

}, {versionKey: false});

const livro = mongoose.model("livros", livrosSchema); //((collection name), (Schema))

export default livro;