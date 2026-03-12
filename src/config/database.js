// Importaçao de dependências e configuração do ambiente
import 'dotenv/config'
import Sequelize from 'sequelize'

// Configuração da conexão com o banco de dados usando as variáveis de ambiente
const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT
    }
)

// Exporta a conexão
export default connection