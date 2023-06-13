const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Additional_educations = sequelize.define('additional_educations', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fin:{
        type: DataTypes.STRING(250)
    },
    step:{
        type: DataTypes.INTEGER(11)
    },
    status:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    },
    ReceptionLineId:{
        type: DataTypes.TINYINT(5)
    },
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    EducationStageId:{
        type: DataTypes.INTEGER(11)
    },
    educationLevelId:{
        type: DataTypes.STRING(250)
    },
    institutionAtisId:{
        type: DataTypes.STRING(250)
    },
    entranceSpecialty:{
        type: DataTypes.STRING(250)
    },
    paymentTypeId:{
        type: DataTypes.INTEGER(11)
    },
    educationFormId:{
        type: DataTypes.INTEGER(11)
    },
    educationLanguageId:{
        type: DataTypes.INTEGER(11)
    },
    entranceSpecialtyPaymentAmount:{
        type: DataTypes.STRING(250)
    },
    specialtyPassword:{
        type: DataTypes.STRING(250)
    },
    previousEduStageId:{
      type:DataTypes.STRING(250)
    },
    previousEduLevelId:{
        type:DataTypes.STRING(250)
    },
    passportScan:{
        type:DataTypes.STRING(250)
    },
    scanningCertificateOfHealth:{
        type:DataTypes.STRING(250)
    },
    previousEducationDocument:{
        type:DataTypes.STRING(250)
    },
    previousEducationLegalizedDocument:{
        type:DataTypes.STRING(250)
    },
    previousEducationTranslatedDocument:{
        type:DataTypes.STRING(250)
    },
    certificateOfLanguageInstruction:{
        type:DataTypes.STRING(250)
    },
    secondarySpecialEducationDiplomaScan:{
        type:DataTypes.STRING(250)
    },
    equivalenceOfSpecialtyDocScan:{
        type:DataTypes.STRING(250)
    },
    paymentChekScan:{
        type:DataTypes.STRING(250)
    },
    cartType:{
        type:DataTypes.INTEGER(11)
    },
    cardBinCode:{
        type:DataTypes.STRING(250)
    },
    EntranceYear:{
        type:DataTypes.INTEGER(11)
    },
    specialtyName:{
        type:DataTypes.STRING(250)
    },
    factorStudyAz:{
        type:DataTypes.STRING(250)
    },
    entranceSubSpecialty:{
        type:DataTypes.STRING(250)
    },
    teachingYear:{
        type:DataTypes.STRING(250)
    },
    graduationYear:{
        type:DataTypes.STRING(250)
    },
    documentType:{
        type:DataTypes.STRING(50)
    },
    documentNo:{
        type:DataTypes.STRING(150)
    },
    additionalEducationTypeId:{
        type:DataTypes.TINYINT(5)
    },
    previousSpecialtyName:{
        type:DataTypes.STRING(500)
    },
    reject_description:{
        type:DataTypes.STRING(500)
    },
    reject_files:{
        type:DataTypes.STRING(500)
    },
    previousInstitutionName:{
        type:DataTypes.STRING(250)
    },
    previousInstitution:{
        type:DataTypes.STRING(150)
    },
    previousSpecialty:{
        type:DataTypes.STRING(150)
    },
    previousSpecialtyCode:{
        type:DataTypes.STRING(250)
    },
    admissionYear:{
        type:DataTypes.STRING(150)
    },
    previousBasicEducation:{
        type:DataTypes.STRING(250)
    },
    basicEducation:{
        type:DataTypes.STRING(250)
    },
    isSend:{
        type:DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0
    } 
},{
    indexes:[{
        name: 'additional_educations_index',
        using: 'BTREE',
        fields: ['fin', 'user_id']
}] ,
collate:'utf8_unicode_ci'
}); 

module.exports = Additional_educations ;