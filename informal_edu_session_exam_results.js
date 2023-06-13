const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_session_exam_results = sequelize.define('informal_edu_session_exam_results', {
    id:{
        type: DataTypes.BIGINT(20),
        primaryKey: true ,
        allowNull: false ,
        autoIncrement: true
    },
    session_id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false
    },
    inf_education_apply_id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false
    },
    fin:{
        type: DataTypes.STRING(50) ,
        allowNull: false
    },
    theo_value:{
        type: DataTypes.DECIMAL(10, 0)
    },
    exam_not_passed:{
        type: DataTypes.INTEGER(11)
    },
    status:{
        type: DataTypes.INTEGER(11)
    }
});

module.exports =  informal_edu_session_exam_results  ;