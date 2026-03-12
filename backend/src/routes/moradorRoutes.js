import { Router } from 'express'
import { cadastrarMorador, listarMorador, deletarMorador, atualizarMorador } from '../controller/moradorController.js'
import { verificarAdmin, verificarToken } from '../middlewares/auth.js'

const rotasMorador = Router()

rotasMorador.post('/cadastrar', verificarToken, verificarAdmin, cadastrarMorador)
rotasMorador.get('/listar', verificarToken, listarMorador)
rotasMorador.put('/:id', verificarToken, verificarAdmin, atualizarMorador)
rotasMorador.delete('/:id', verificarToken, verificarAdmin, deletarMorador)

export default rotasMorador