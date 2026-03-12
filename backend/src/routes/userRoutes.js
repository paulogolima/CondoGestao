import { Router } from "express"
import { cadastrar, listarTodos, login, atualizarUsuario, deletarUsuario } from "../controller/userController.js"
import { verificarAdmin, verificarToken } from "../middlewares/auth.js"

const rotas = Router()

rotas.post('/login', login)
rotas.post('/cadastrar', cadastrar)
rotas.get('/listar', verificarToken, verificarAdmin, listarTodos)
rotas.put('/:id', verificarToken, verificarAdmin, atualizarUsuario)
rotas.delete('/:id', verificarToken, verificarAdmin, deletarUsuario)

export default rotas