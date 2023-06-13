const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_session_date = sequelize.define('informal_edu_session_date', {
    id:{
       type: DataTypes.INTEGER(11) ,
       allowNull: false ,
       primaryKey: true ,
       autoIncrement: true 
    },
    name:{
        type: DataTypes.STRING(50)
    },
    description:{
        type: DataTypes.TEXT
    },
    theo_protocol_number:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    },
    theo_questions_number:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0  
    },
    theo_secretary:{
        type: DataTypes.STRING(50)  
    },
    theo:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        defaultValue: 0
    },
    theo_document:{
        type: DataTypes.STRING(300)
    },
    theo_minimum_point:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    },
    theo_exam_date:{
        type: DataTypes.DATEONLY
    },
    theo_protocol_date:{
        type: DataTypes.DATEONLY
    },
    prac:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    },
    prac_protocol_number:{
        type: DataTypes.INTEGER ,
        defaultValue: 0
    },
    prac_secretary:{
        type: DataTypes.STRING(300)
    },
    prac_protocol_date:{
        type: DataTypes.DATEONLY
    },
    prac_exam_date:{
        type: DataTypes.DATEONLY
    },
    prac_document:{
        type: DataTypes.STRING(300)
    },
    start_date:{
        type: DataTypes.DATE
    },
    end_date:{
        type: DataTypes.DATE
    },
    theo_up_date:{
        type: DataTypes.DATE
    },
    prac_up_date:{
        type: DataTypes.DATE
    },
    apply_status:{
        type: DataTypes.INTEGER(11)
    },
    status:{
        type: DataTypes.INTEGER(11)
    }
});

module.exports =  informal_edu_session_date  ;