// Importaçao de dependências e configuração do ambiente
import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const verificarToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]

    if (!token) return res.status(401).json({ erro: "Token não fornecido." })

    try {
        req.usuario = jwt.verify(token, process.env.JWT_SECRET)
        req.role_user = req.usuario.role
        next()
    } catch {
        return res.status(401).json({ erro: "Token inválido ou expirado." })
    }
}


export const verificarAdmin = ( req, res, next ) => {
    if (req.role_user === 'admin') return next()

    return res.status(403).json({
        erro: "Acesso negado. Essa área é restrita para administradores."
    })
}