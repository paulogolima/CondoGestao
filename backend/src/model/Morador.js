// Importaçao de dependências e configuração do ambiente
import { DataTypes } from 'sequelize'
import connection from "../config/database.js";
import Unidade from './Unidade.js'

const Morador = connection.define('Morador', {
   name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo:{
        type: DataTypes.ENUM('proprietario', 'inquilino'),
        defaultValue: 'proprietario',
        allowNull: true
    },
    unidadeId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'Unidades',
            key: 'id'
        }
    }
})

Morador.belongsTo(Unidade, { foreignKey: 'unidadeId'})
Unidade.hasMany(Morador, { foreignKey: 'unidadeId' })

export default Morador