const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_task_assessment = sequelize.define('informal_edu_task_assessment', {
id:{
    type: DataTypes.BIGINT(20),
    allowNull: false ,
    autoIncrement: true ,
    primaryKey: true
},
task_id:{
    type: DataTypes.BIGINT(20)
},
expert_id:{
    type: DataTypes.BIGINT(20)
},
inf_education_apply_id:{
    type: DataTypes.BIGINT(20)
},
final_opinion:{
    type: DataTypes.TEXT
},
status:{
    type: DataTypes.INTEGER(11) ,
    defaultValue: 0
},
approval_date:{
    type: DataTypes.DATE ,
    defaultValue: DataTypes.NOW
},

});

module.exports =  informal_edu_task_assessment  ;