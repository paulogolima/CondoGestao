// Importaçao de dependências e configuração do ambiente
import 'dotenv/config'
import express from 'express'
import connection from './config/database.js'
import rotas from './routes/userRoutes.js'
import rotasUnidade from './routes/unidadeRoutes.js'
import rotasMorador from './routes/moradorRoutes.js'

const app = express()
const port = process.env.PORT

app.use(express.json())

// Rotas do Usuário
app.use('/usuarios', rotas)

// Rotas da Unidade
app.use('/unidade',rotasUnidade)

// Rotas do Morador
app.use('/morador', rotasMorador) 


// Sincroniza o banco e inicia o servidor
connection.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor Rodando em: http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(`Erro ao iniciar o Servidor: ${err}`)
})
