import Morador from "../model/Morador.js"


export const cadastrarMorador = async ( req, res) => {
    try{
        const { name, cpf, telefone, tipo, unidadeId } = req.body

        const newMorador = await Morador.create({ name, cpf, telefone, tipo, unidadeId})

        return res.status(201).json({
            mensagem: "Morador cadastrado com sucesso!",
            id: newMorador.id
        })
    } catch ( erro ) {
        return res.status(400).json({
            erro: "não foi possível cadastrar o morador.",
            detalhe: erro.message
        })
    }
}

export const listarMorador = async ( req, res) => {
    try{
        const morador = await Morador.findAll({
            attributes: [ 'name', 'cpf', 'telefone', 'tipo', 'unidadeId' ]
        })
        return res.json(morador)
    } catch ( erro ) {
        return res.status(500).json({erro: "Erro em buscar moradores cadastrados"})
    }
}

export const deletarMorador = async ( req, res) => {
    try{
        const { id } = req.params

        const morador = await Morador.findByPk(id)

        if (!morador) {
            return res.status(404).json({
                erro: "Morador não encontrado."
            })
        }

        await morador.destroy()

        return res.json({
            mensagem: "Morador deletado com sucesso!"
        })
    } catch ( erro ) {
        return res.status(500).json({
            erro: "Erro ao deletar morador.",
            detalhe: erro.message
        })
    }
}

export const atualizarMorador = async ( req, res ) => {
    try{
        const { id } = req.params

        const { name, cpf, telefone, tipo, unidadeId} = req.body

        const morador = await Morador.findByPk(id)

        if (!morador) {
            return res.status(404).json({
                erro: "Morador não encontrado."
            })
        }

        await morador.update({ name, cpf, telefone, tipo, unidadeId })

        return res.json({
            mensagem: "Morador atualizado com sucesso!"
        })
    } catch ( erro ) {
        return res.status(500).json({
            erro: "Erro ao atualizar morador.",
            detalhe: erro.message
        })
    }
}