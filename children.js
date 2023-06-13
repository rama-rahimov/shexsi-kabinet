const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Children = sequelize.define('children',{
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id:{
      type: DataTypes.INTEGER(11) ,
      allowNull: false
    },
    fin:{
        type: DataTypes.STRING(25),
        allowNull: false ,
        defaultValue: ''
    },
    birth_certificate_no:{
        type: DataTypes.STRING(25),
        defaultValue: ''
    },
    type:{
        type: DataTypes.TINYINT(1),
        allowNull: false
    } ,
    city:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    region:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    current_enterprise:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    grade:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    teaching_language:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    parent_type:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    deleted:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0
    },
    school_code:{
        type: DataTypes.STRING(20)  
    },
    utis_code:{
        type: DataTypes.STRING(20)
    },
    edu_level:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    }
});

module.exports =  Children  ;