const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Atis_enterprises = sequelize.define('atis_enterprises', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
      type: DataTypes.STRING(100)
      },
      nameEn:{
        type: DataTypes.STRING(100)
      },
      ATIS_ID:{
        type: DataTypes.STRING(100)
      },
      type:{
        type: DataTypes.TINYINT(4) ,
        allowNull: false ,
        defaultValue: 1
      }
},{
  collate: 'utf8_unicode_ci' ,
});

module.exports =  Atis_enterprises  ;