const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const EducationStage = sequelize.define('EducationStage', {
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true ,
        allowNull: false ,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(200)
    },
    nameEn:{
        type: DataTypes.STRING(200)
    }
},{
    indexes:[{
        name: 'educationstage_index',
        using: 'BTREE',
        fields: ['name']
    }]
});

module.exports =  EducationStage  ;