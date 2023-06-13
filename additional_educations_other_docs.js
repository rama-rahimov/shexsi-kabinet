const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Additional_educations_other_docs = sequelize.define('additional_educations_other_docs', {
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    doc_scan:{
        type: DataTypes.STRING(250)
    },
    additional_education_id:{
        type: DataTypes.INTEGER(11)
    }
},{
    charset: 'latin1' ,
    collate: 'latin1_swedish_ci'
});

module.exports = Additional_educations_other_docs ;