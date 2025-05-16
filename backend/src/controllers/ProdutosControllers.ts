import { Request, Response } from "express";
import ProdutoModel from "../models/Produtos";

export const criarProduto = async (req: Request, res: Response) => {
    try{
        const novoProduto  = new ProdutoModel(req.body);
        console.log("novo produto:", novoProduto.toObject());
        const produtoSalvo = await novoProduto.save();
        console.log(produtoSalvo)
        res.status(201).json({message:`Produtos salvos ${produtoSalvo}`});
    } catch (error) {
        res.status(500).json({ mensagem: "error ao criar produto", erro: error});
    }
};