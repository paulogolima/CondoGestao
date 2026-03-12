import Unidade from "../model/Unidade.js"

// Cadastra unidade
export const cadastrarUnidade = async ( req, res ) => {
    try{
        const { bloco, numero, status } = req.body

        const newUnidade = await Unidade.create({ bloco, numero, status })

        return res.status(201).json({
            mensagem: "Unidade criada com sucesso!",
            id: newUnidade.id
        })
    } catch( erro ) {
        return res.status(400).json({
            erro: "Não foi possível cadastrar a unidade.",
            detalhe: erro.message
        })
    }
}

// Lista todas as unidades
export const listarUnidade = async ( req, res ) => {
    try{
        const unidade = await Unidade.findAll({
            attributes: [ 'bloco', 'numero', 'status']
        })
        return res.json(unidade)
    } catch ( erro ) {
        return res.status(500).json({ erro: "Erro em buscar unidades cadastradas."})
    }
}


// Deleta Unidade
export const deletarUnidade = async ( req, res) => {
    try{
        const { id } = req.params

        const unidade = await Unidade.findByPk(id)

        if (!unidade) {
            return res.status(404).json({
                erro: "Unidade não encontrada."
            })
        }

        await unidade.destroy()

        return res.json({
                mensagem: "Unidade deletada com sucesso!"
            })
    } catch ( erro ) {
        return res.status(500).json({
            erro: "Erro em deletar unidade.",
            detalhe: erro.message
        })
    } 
}


// Atualizar Unidade
export const atualizarUnidade = async ( req, res) => {
    try{
        const { id } = req.params
        
        const { bloco, numero, status } = req.body 

        const unidade = await Unidade.findByPk(id)

        if (!unidade) {
            return res.status(404).json({
                erro: "Unidade não encontrada."
            })
        }

        await unidade.update({ bloco, numero, status })

        return res.json({
            mensagem: "Unidade atualizada com sucesso!"
        })
    } catch ( erro ) {
        return res.status(500).json({
            erro: "Erro ao atualizar unidade",
            detalhe: erro.message
        })
    }  
}
