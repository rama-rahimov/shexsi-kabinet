const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const sms_temp_datas = sequelize.define('sms_temp_datas', {
    fin:{
        type: DataTypes.STRING(100)
    },
    login:{
        type: DataTypes.STRING(100) ,
        collate: 'utf8_unicode_ci'
    },
    pass:{
        type: DataTypes.STRING(100) ,
        collate: 'utf8_unicode_ci'
    },
    link:{
        type: DataTypes.STRING(100)
    },
    phone:{
        type: DataTypes.STRING(100)
    },
    status:{
        type: DataTypes.TINYINT(4) ,
        allowNull: false ,
        defaultValue: 0
    }
});

sms_temp_datas.removeAttribute('id');

module.exports =  sms_temp_datas  ;