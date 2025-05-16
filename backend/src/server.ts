import express from "express";
import {connectDB} from './config/database';
import dotenv from 'dotenv';
import router from "./routes/produto.routes";

dotenv.config();
const app = express();

app.use(express.json());


connectDB();

app.use('/api/produto', router);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))