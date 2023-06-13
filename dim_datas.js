const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Dim_datas = sequelize.define('dim_datas', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      dimNo:{
        type: DataTypes.STRING(100)
      },
      specialtyDimCode:{
        type: DataTypes.STRING(100)
      },
      entranceSpecialty:{
        type: DataTypes.STRING(100)
      },
      specialtyPassword:{
        type: DataTypes.STRING(100)
      },
      specialtyName:{
        type: DataTypes.STRING(500)
      },
      institutionAtisId:{
        type: DataTypes.STRING(100)
      },
      EntranceYear:{
        type: DataTypes.STRING(100)
      },
      educationLanguageId:{
        type: DataTypes.STRING(100)
      },
      educationFormId:{
        type: DataTypes.STRING(100)
      },
      paymentTypeId:{
        type: DataTypes.STRING(100)
      },
      entranceSpecialtyPaymentAmount:{
        type: DataTypes.STRING(100)
      },
      EducationStageId:{
        type: DataTypes.STRING(100)
      },
      educationLevelId:{
        type: DataTypes.STRING(100)
      },
      basicEducation:{
        type: DataTypes.STRING(100)
      },
      teachingYear:{
        type: DataTypes.STRING(100)
      },
      fin:{
        type: DataTypes.STRING(100)
      },
      tur:{
        type: DataTypes.TINYINT(2).UNSIGNED ,
        allowNull: false ,
        defaultValue: 1
      },
      pointsOnEntrance:{
        type: DataTypes.STRING(10)
      },
      phone_number:{
        type: DataTypes.STRING(100)
      },
      end_date:{
        type: DataTypes.DATE
      },
      smssend:{
        type: DataTypes.TINYINT(2).UNSIGNED ,
        allowNull: false ,
        defaultValue: 1 ,
      },
      ReceptionLineId:{
        type: DataTypes.TINYINT(2).UNSIGNED ,
        allowNull: false ,
        defaultValue: 1 ,
      },
      isFinish:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0 ,
      }
},{
  indexes:[{
      name: 'dim_datas_index',
      using: 'BTREE',
      fields: ['fin', 'end_date', 'entranceSpecialty']
}],
});

module.exports =  Dim_datas ;