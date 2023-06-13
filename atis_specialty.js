const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Atis_specialty = sequelize.define('atis_specialty', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type: DataTypes.STRING(250) ,
        collate:'utf8_unicode_ci' ,
      },
      nameEn:{
        type: DataTypes.STRING(250) ,
        collate:'utf8_unicode_ci',
      },
      ATIS_ID:{
        type: DataTypes.STRING(100),
        collate:'utf8_unicode_ci' ,
      },
      password:{
        type: DataTypes.STRING(100)
      }
},{
  charset: 'utf8' ,
  collate: 'utf8mb3_general_ci'
});

module.exports = Atis_specialty  ;