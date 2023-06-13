const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Appeals_out_of_school = sequelize.define('appeals_out_of_school',{
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
      },
      children_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
      },
      user_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
      },
      step:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false
      },
      status:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false
      },
      first_name:{
         type: DataTypes.STRING(250)
      },
      last_name:{
        type: DataTypes.STRING(250)
      },
      father_name:{
        type: DataTypes.STRING(250)
      },
      birth_date:{
        type: DataTypes.STRING(25)
      },
      address:{
        type: DataTypes.STRING(250)
      },
      actual_address:{
        type: DataTypes.STRING(250)
      },
      genderId:{
        type: DataTypes.TINYINT(1)
      },
      is_address_current:{
        type: DataTypes.TINYINT(1)
      },
      city:{
        type: DataTypes.STRING(250)
      },
      region:{
        type: DataTypes.STRING(250)
      },
      current_enterprise:{
        type: DataTypes.STRING(250)
      },
      grade:{
        type: DataTypes.STRING(250)
      },
      parent_type:{
        type: DataTypes.STRING(11)
      },
      teaching_language:{
        type: DataTypes.STRING(250)
      },
      health_cert_date:{
        type: DataTypes.STRING(250)
      },
      health_cert_no:{
        type: DataTypes.STRING(250)
      },
      health_cert_scan:{
        type: DataTypes.STRING(250)
      },
      photo_3x4_scan:{
        type: DataTypes.STRING(250)
      },
      birth_cert_scan:{
        type: DataTypes.STRING(250)
      }
}) ;

module.exports =  Appeals_out_of_school  ;