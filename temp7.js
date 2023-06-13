const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const temp7 = sequelize.define('temp7', {
    xtisasn_ifri:{
        type: DataTypes.DOUBLE
    },
    xtisasn_ad:{
        type: DataTypes.STRING(100)
    },
    Atis_ixtisas_ID:{
        type: DataTypes.STRING(100),
        unique: true
    }
});

temp7.removeAttribute('id');

module.exports =  temp7 ;