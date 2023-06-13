const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_user_modules = sequelize.define('informal_edu_user_modules', {
    id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false ,
        autoIncrement: true,
        primaryKey: true
    },
    user_id:{
        type: DataTypes.BIGINT(20)
    },
    inf_education_apply_id:{
        type: DataTypes.BIGINT(20)
    },
    module_id:{
        type: DataTypes.BIGINT(20)
    },
    sn:{
        type: DataTypes.STRING(50)
    },
    module_name:{
        type: DataTypes.STRING(150)
    },
    payment_status:{
        type: DataTypes.INTEGER(11)
    },
    assignment_status:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    },
    status:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    }
});

module.exports =  informal_edu_user_modules ;