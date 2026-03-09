// Importaçao de dependências e configuração do ambiente
import {DataTypes} from 'sequelize'
import bcrypt from 'bcrypt'
import connection from '../config/database.js'

const User = connection.define('User',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {isEmail: true}
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user',
        allowNull: false
    }

})

// Ação para criptografar a senha antes de salvar no banco de dados
User.addHook('beforeSave', async (user) => {
    if(user.password){
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
    }
})

export default User