const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Custompasswords = sequelize.define('custompasswords', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: '' 
    },
    fin:{
        type: DataTypes.STRING(200)
    },
    stage:{
        type: DataTypes.STRING(1),
        defaultValue: '' 
    },
    line:{
        type: DataTypes.TINYINT(1).UNSIGNED
    },
    iso3:{
        type: DataTypes.STRING(5)
    }
});

module.exports =  Custompasswords  ;