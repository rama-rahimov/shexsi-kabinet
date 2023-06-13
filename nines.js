const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const nines = sequelize.define('nines', {
    SOYADI:{
        type: DataTypes.STRING(100)
    },
    ADI:{
        type: DataTypes.STRING(100)
    },
    ATA_ADI:{
        type: DataTypes.STRING(100)
    },
    FIN:{
        type: DataTypes.STRING(100)
    }
},{
    indexes:[{
        name: 'nines_index',
        using: 'BTREE',
        fields: ['FIN']
    }]
});

nines.removeAttribute('id');

module.exports =   nines  ;