import { Router } from 'express'
import { cadastrarUnidade, listarUnidade, deletarUnidade, atualizarUnidade } from '../controller/unidadeController.js'
import { verificarAdmin, verificarToken } from '../middlewares/auth.js'

const rotasUnidade = Router()

rotasUnidade.post('/cadastrar', verificarToken, verificarAdmin, cadastrarUnidade)
rotasUnidade.get('/listar', verificarToken, listarUnidade)
rotasUnidade.put('/:id', verificarToken, verificarAdmin, atualizarUnidade)
rotasUnidade.delete('/:id', verificarToken, verificarAdmin, deletarUnidade)

export default rotasUnidade