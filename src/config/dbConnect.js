import mongoose from 'mongoose';

async function dbConnect() {
    mongoose.connect('mongodb+srv://Admin:admin123@mydatabase.eujxumz.mongodb.net/Livraria?retryWrites=true&w=majority');
    //Adicionei a senha do banco de dados e o nome do banco de dados que criei no MongoDB Atlas 'livraria'

    return mongoose.connection;
};

export default dbConnect;