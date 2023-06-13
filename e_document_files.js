const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const e_document_files = sequelize.define('e_document_files', {
    id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        primaryKey: true ,
        autoIncrement: true
    },
    e_documents_apply_id:{
        type: DataTypes.INTEGER(11)
    },
    doc_scan:{
        type: DataTypes.STRING(250)
    }
},{
    charset:'latin1' ,
    collate:'latin1_swedish_ci'
});

module.exports =  e_document_files  ;