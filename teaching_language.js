const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const teaching_language = sequelize.define('teaching_language', {
    id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(200)
    },
    deleted:{
        type: DataTypes.TINYINT(1) ,
        defaultValue: 0
    }
},{
    indexes:[{
        name: 'teaching_language_index',
        using: 'BTREE',
        fields: ['name', 'deleted']
}],
});

module.exports =  teaching_language  ;