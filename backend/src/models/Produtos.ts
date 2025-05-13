import { Schema, model, Document } from "mongoose";

interface IProduto extends Document {
    nome: string;
    categoria: string;
    preco: number;
    quantidade: number;
}

const ProdutoSchema = new Schema<IProduto>({
    nome:{type: String, required: true},
    categoria: { type: String, required: true},
    preco: { type: Number, required: true},
    quantidade: { type: Number, required: true}
}, {
    timestamps: true 
});

const ProdutoModel = model<IProduto>('Produtos', ProdutoSchema);

export default ProdutoModel;