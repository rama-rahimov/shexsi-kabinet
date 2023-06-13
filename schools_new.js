const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const schools_new = sequelize.define('schools_new', {
    id:{
        type: DataTypes.INTEGER(10) ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    student_cart_id:{
        type: DataTypes.STRING(250)
    },
    DIM_ID:{
        type: DataTypes.STRING(250) 
    },
    DTS_ID:{
        type: DataTypes.STRING(250)  
    },
    DM_NAME:{
        type: DataTypes.STRING(250)  
    },
    name:{
        type: DataTypes.STRING(250)
    },
    name_eng:{
        type: DataTypes.STRING(250)
    },
    Abreviatura_AZE:{
        type: DataTypes.STRING(250)
    },
    Abreviatura_ENG:{
        type: DataTypes.STRING(250)
    },
    old_name:{
        type: DataTypes.STRING(250)
    },
    org_id:{
        type: DataTypes.STRING(250)
    },
    org_name:{
        type: DataTypes.STRING(250)
    },
    org_old_name:{
        type: DataTypes.STRING(250)
    },
    org_old_id:{
        type: DataTypes.STRING(250)
    },
    status:{
        type: DataTypes.STRING(250)
    }
});               

module.exports =  schools_new ;