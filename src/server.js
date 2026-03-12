// Importaçao de dependências e configuração do ambiente
import 'dotenv/config'
import express from 'express'
import connection from './config/database.js'
import rotas from './routes/userRoutes.js'

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/usuarios', rotas)


// Sincroniza o banco e inicia o servidor
connection.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor Rodando em: http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(`Erro ao iniciar o Servidor: ${err}`)
})
