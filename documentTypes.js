const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const documentTypes = sequelize.define('documentTypes', {
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(200)
    },
    nameEn:{
        type: DataTypes.STRING(200)
    }
},{
    indexes:[{
        name: 'documenttypes_index',
        using: 'BTREE',
        fields: ['name']
}],
});

module.exports =  documentTypes ;