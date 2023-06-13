const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_session_specializations = sequelize.define('informal_edu_session_specializations', {
    id:{
        type: DataTypes.BIGINT(20) ,
        primaryKey: true ,
        allowNull: false ,
        autoIncrement: true
    },
    session_id:{
        type: DataTypes.BIGINT(20)
    },
    specialty_id:{
        type: DataTypes.BIGINT(20)
    },
    type:{
        type: DataTypes.STRING(50) ,
    },
    specialty_status:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    },
    module_status:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    }
});

module.exports =  informal_edu_session_specializations  ;