const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Chf = sequelize.define('chf', {
    fin:{
        type: DataTypes.STRING(50)
      }
},{
    indexes:[{
        using: 'BTREE',
        fields: ['fin']
}],
charset: 'utf8' ,
collate: 'utf8mb3_general_ci'
});

Chf.removeAttribute('id');

module.exports =  Chf  ;