const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const phone_verification = sequelize.define('phone_verification', {
    id:{
        type: DataTypes.INTEGER(11) ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    country_code:{
        type: DataTypes.STRING(11),
        defaultValue: ''
    },
    phone:{
        type: DataTypes.STRING(250),
        allowNull: false ,
        defaultValue: '0'
    },
    code:{
        type: DataTypes.STRING(30) ,
        allowNull: false ,
        defaultValue: '0'
    },
    applicants_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        defaultValue: 0
    },
    verify:{
        type: DataTypes.TINYINT(1).UNSIGNED ,
        allowNull: false ,
        defaultValue: 0
    },
    created_date:{
        type: DataTypes.DATE
    },
    updated_date:{
        type: DataTypes.DATE
    },
    number_wait_date:{
        type: DataTypes.DATE
    },
    count:{
        type: DataTypes.TINYINT(1),
        allowNull: false ,
        defaultValue: 0
    }
},{
    indexes:[{
        name: 'phone_verification_index',
        using: 'BTREE',
        fields: ['phone', 'code']
}],
});

module.exports =  phone_verification  ;