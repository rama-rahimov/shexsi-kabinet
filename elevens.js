const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const elevens = sequelize.define('elevens', {
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
}, {
    indexes:[{
        name: 'elevens_index', 
        using: 'BTREE',
        fields: ['FIN']
}],
});

elevens.removeAttribute('id');

module.exports =  elevens  ;