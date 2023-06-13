const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const sms_list = sequelize.define('sms_list', {
    fin:{
        type: DataTypes.STRING(100)
    },
    phone:{
        type: DataTypes.DOUBLE
    },
    isSendSms:{
        type: DataTypes.TINYINT(1).UNSIGNED ,
        allowNull: false ,
        defaultValue: 0
    }
});

sms_list.removeAttribute('id');

module.exports =  sms_list  ;