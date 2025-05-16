import  Express  from "express";
import { criarProduto} from "../controllers/ProdutosControllers";
const router = Express.Router();

//Rota para criar produto
router.post('/cadastrar', criarProduto);

export default router;