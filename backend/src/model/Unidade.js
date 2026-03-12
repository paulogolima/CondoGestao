// Importaçao de dependências e configuração do ambiente
import {DataTypes} from 'sequelize'
import connection from "../config/database.js";

const Unidade = connection.define('Unidade',{
    bloco:{
        type: DataTypes.STRING,
        allowNull: false,
        set(value){
            this.setDataValue("bloco", value.toLowerCase())
        }
    },
    numero:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{
        type:DataTypes.ENUM('ocupado', 'vago'),
        defaultValue: 'vago',
        allowNull: false
    }
})

export default Unidade
