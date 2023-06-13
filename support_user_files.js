const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const support_user_files = sequelize.define('support_user_files', {
    id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    fin:{
        type: DataTypes.STRING(50)
    },
    fileId:{
        type: DataTypes.INTEGER(11)
    }
},{
    charset:'latin1' ,
    collate:'latin1_swedish_ci'
});

module.exports =  support_user_files 