import { Router } from "express"
import { cadastrar, listarTodos, login } from "../controller/userController.js"
import { verificarAdmin } from "../middlewares/auth.js"

const rotas = Router()

rotas.post('/login', login)
rotas.post('/cadastrar', cadastrar)
rotas.get('/listar', verificarAdmin, listarTodos)

export default rotas