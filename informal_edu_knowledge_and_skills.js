const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_knowledge_and_skills = sequelize.define('informal_edu_knowledge_and_skills', {
    inf_education_apply_id:{
        type: DataTypes.BIGINT(20),
    },
    file_type:{
        type: DataTypes.STRING(100)
    },
    file_name:{
        type: DataTypes.STRING(150)
    }
});

informal_edu_knowledge_and_skills.removeAttribute('id');

module.exports =  informal_edu_knowledge_and_skills  ;