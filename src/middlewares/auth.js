export const verificarAdmin = (req, res, next) => {

    // Pega o Cargo que vem no Header da requisição
    const { role_user } = req.headers

    // Se for admin, vai para o controller
    if (role_user === 'admin') {
        return next()
    }

    // Se não for Admin
    return res.status(403).json({
        erro: "Acesso negado. Essa área é restrita para administradores."
    })
}