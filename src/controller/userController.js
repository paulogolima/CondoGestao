// Importaçao de dependências e configuração do ambiente
import User from '../model/User.js'
import bcrypt from 'bcrypt'

// Cadastro de Usuários
export const cadastrar = async ( req, res ) => {
    try {
        const { name, email, password, role } = req.body

        const newUser = await User.create({ name, email, password, role })

        return res.status(201).json({
            mensagem: "Usuário criado com sucesso!",
            id: newUser.id
        })
        // Em caso de erro ele cai aqui
    } catch ( erro ) {
        return res.status(400).json({
            erro: "Não foi possivel realizar o cadastro.",
            detalhe: erro.message
        })
    }
}

// Login de Usuários
export const login = async ( req, res )=>{
    try {
        const { email, password } = req.body

        // Verifica se o usuário existe no Banco
        const usuario = await User.findOne({ where: { email } })

        if (!usuario) {
            return res.status(401).json({erro: "Email ou senha incorretos."})
        }

        // Compara senha digitada com senha criptografada
        const senhaValida = await bcrypt.compare(password, usuario.password)

        if (!senhaValida) {
            return res.status(401).json({erro: "Email ou senha incorretos."})
        }

        // Se der tudo certo
        return res.json({
            mensagem: "Login realizado com sucesso!",
            usuario:{
                id: usuario.id,
                nome: usuario.name,
                cargo: usuario.role
            }
        })
    } catch ( erro ) {
        return res.status(500).json({erro: "Erro ao processar o login"})
    }
}

// Listar Usuários
export const listarTodos = async (req,res) => {
    try {
        const usuarios = await User.findAll({
            attributes: [ 'id', 'name',  'email', 'role' ]
        })
        return res.json(usuarios)
    } catch ( erro ) {
        return res.status(500).json({ erro: "Erro em buscar usuários." })
    }
}

