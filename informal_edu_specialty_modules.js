const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_specialty_modules = sequelize.define('informal_edu_specialty_modules', {
    id:{
        type: DataTypes.INTEGER(11) ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    module_id:{
        type: DataTypes.INTEGER(11)
    },
    sn:{
        type: DataTypes.STRING(11)
    },
    name:{
        type: DataTypes.STRING(300)
    }
});

module.exports = informal_edu_specialty_modules  ;