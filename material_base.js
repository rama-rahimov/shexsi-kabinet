const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const material_base = sequelize.define('material_base', {
    id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        primaryKey: true ,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(200)
    },
    deleted:{
        type: DataTypes.TINYINT(1),
        defaultValue: 0
    }
},{
    indexes:[{
        name: 'material_base_index',
        using: 'BTREE',
        fields: ['name', 'deleted']
}]
});

module.exports =  material_base  ;