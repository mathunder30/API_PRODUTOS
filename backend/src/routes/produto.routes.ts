import  Express  from "express";
import { criarProduto} from "../controllers/ProdutosControllers";
const router = Express.Router();

//Rota para criar produto
router.get('/get_produto', criarProduto);

export default router;