const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Country = sequelize.define('country', {
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      iso:{
        type: DataTypes.CHAR(2),
        allowNull: false ,
        defaultValue: ''
      },
      nameEn:{
        type: DataTypes.STRING(80),
        allowNull: false ,
        defaultValue: ''
      },
      name:{
        type: DataTypes.STRING(80) ,
        collate: 'utf8_turkish_ci'
      },
      iso3:{
        type: DataTypes.CHAR(3)
      },
      numcode:{
         type: DataTypes.SMALLINT(6)
      },
      phonecode:{
        type: DataTypes.INTEGER(5),
        allowNull: false
      },
      min_size:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        defaultValue: 4
      },
      max_size:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        defaultValue: 13
      },
      recognized:{
        type: DataTypes.TINYINT(1),
        allowNull: false ,
        defaultValue: 0
      }
},{
  charset: 'utf8' ,
    collate: 'utf8mb3_general_ci'
});

module.exports =  Country ;