const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const additionalEducationTypes = sequelize.define('additionalEducationTypes',{
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
      },
      name:{
        type: DataTypes.STRING(250)
      },
      nameEn:{
        type: DataTypes.STRING(250)
      }
});

module.exports = additionalEducationTypes ;