import { Request, Response } from "express";
import ProdutoModel from "../models/Produtos";

export const criarProduto = async (req: Request, res: Response) => {
    try{
        const novoProduto  = new ProdutoModel(req.body);
        const produtoSalvo = await novoProduto.save();
        res.status(201).json(produtoSalvo);
    } catch (error) {
        res.status(500).json({ mensagem: "error ao criar produto", erro: error});
    }
};