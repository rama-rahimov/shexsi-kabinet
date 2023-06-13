const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_expert_or_commission_modules = sequelize.define('informal_edu_expert_or_commission_modules', {
    id:{
        type: DataTypes.BIGINT(20),
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    session_id:{
        type: DataTypes.BIGINT(20)
    },
    user_id:{
        type: DataTypes.BIGINT(20)
    },
    specialty_id:{
        type: DataTypes.BIGINT(20)
    },
    module_id:{
        type: DataTypes.BIGINT(20)
    },
    position:{
        type: DataTypes.STRING(50)
    },
    status:{
        type: DataTypes.INTEGER(11)
    }
});

module.exports =  informal_edu_expert_or_commission_modules  ;