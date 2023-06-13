const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const scientific_type = sequelize.define('scientific_type', {
    id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(100) ,
        allowNull: false ,
    },
    deleted:{
        type: DataTypes.TINYINT(1) ,
        defaultValue: 0
    }
},{
    collate:'utf8mb3_unicode_ci'
});

module.exports =  scientific_type  ;