const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_documentation_status = sequelize.define('informal_edu_documentation_status', {
    id:{
        type: DataTypes.BIGINT(20) ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    user_id:{
        type: DataTypes.BIGINT(20) 
    },
    inf_education_apply_id:{
        type: DataTypes.BIGINT(20) 
    },
    note:{
        type: DataTypes.TEXT
    },
    status:{
        type: DataTypes.INTEGER(11)
    },
});

module.exports =  informal_edu_documentation_status  ;