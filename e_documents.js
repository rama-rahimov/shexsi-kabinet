const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const E_documents = sequelize.define('e_documents', {
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    },
    fin:{
        type: DataTypes.STRING(30)
    },
    hash:{
        type: DataTypes.STRING(250)
    },
    editorial:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        defaultValue: 1
    },
    diplom_cat_id:{
        type: DataTypes.INTEGER(11)
    },
    document_no:{
        type: DataTypes.STRING(250)
    },
    document_name:{
        type: DataTypes.STRING(250)
    },
    edoc_diplom_url:{
        type: DataTypes.STRING(250)
    },
    edoc_supplement_url:{
        type: DataTypes.STRING(250)
    },
    pdf_diplom_url:{
        type: DataTypes.STRING(250)
    },
    pdf_supplement_url:{
        type: DataTypes.STRING(250)
    },
    img_diplom_url:{
        type: DataTypes.STRING(250)
    },
    img_supplement_url:{
        type: DataTypes.STRING(250)
    },
    file_details:{
        type: DataTypes.TEXT
    },
    attention:{
        type: DataTypes.TEXT
    },
    end_date:{
        type: DataTypes.DATEONLY
    },
    extra_id:{
        type: DataTypes.INTEGER(11)
    },
    extra_key:{
        type: DataTypes.STRING(250)
    }
});

module.exports =  E_documents  ;