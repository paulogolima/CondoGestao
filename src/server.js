// Importaçao de dependências e configuração do ambiente
import 'dotenv/config'
import express from 'express'
import connection from './config/database.js'

const app = express()
const port = process.env.PORT

// Rota inicial
app.get('/', (req, res) => {
    res.json("rodando")
})

// Sincroniza o banco e inicia o servidor
connection.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor Rodando em: http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(`Erro ao iniciar o Servidor: ${err}`)
})
