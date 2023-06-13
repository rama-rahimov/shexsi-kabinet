const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const student_appeals = sequelize.define('student_appeals', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
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
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    ReceptionLineId:{
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
    dimNo:{
        type: DataTypes.STRING(250)
    },
    specialtyDimCode:{
        type: DataTypes.INTEGER(11)
    },
    entranceSpecialty:{
        type: DataTypes.STRING(250)
    },
    paymentTypeId:{
        type: DataTypes.INTEGER(11)
    },
    subordinateSpecialization:{
        type: DataTypes.STRING(250)
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
        type: DataTypes.STRING(250)
    },
    previousEduLevelId:{
        type: DataTypes.STRING(250)
    },
    passportScan:{
        type: DataTypes.STRING(250)
    },
    scanningCertificateOfHealth:{
        type: DataTypes.STRING(250)
    },
    previousEducationDocument:{
        type: DataTypes.STRING(250)
    },
    previousEducationLegalizedDocument:{
        type: DataTypes.STRING(250)
    },
    previousEducationTranslatedDocument:{
        type: DataTypes.STRING(250)
    },
    certificateOfLanguageInstruction:{
        type: DataTypes.STRING(250)
    },
    personnelRegistrationCard:{
        type: DataTypes.STRING(250)
    },
    biographyDocScan:{
        type: DataTypes.STRING(250)
    },
    photo3x4:{
        type: DataTypes.STRING(250)
    },
    workCertificateScan:{
        type: DataTypes.STRING(250)
    },
    workExperienceScan:{
        type: DataTypes.STRING(250)
    },
    publishedScientificWorksScan:{
        type: DataTypes.STRING(250)
    },
    publishedScientificWorkListScan:{
        type: DataTypes.STRING(250)
    },
    diplomaOfHigherEducationScan:{
        type: DataTypes.STRING(250)
    },
    identityDocumentScan:{
        type: DataTypes.STRING(250)
    },
    diplomaOfDoctorOfPhilosophyScan:{
        type: DataTypes.STRING(250)
    },
    basicEducation:{
        type: DataTypes.STRING(250)
    },
    pointsOnEntrance:{
        type: DataTypes.STRING(250)
    },
    schoolDiplomaScan:{
        type: DataTypes.STRING(250)
    },
    higherSchoolDiplomaScan:{
        type: DataTypes.STRING(250)
    },
    higherVocationalEducationDiplomaScan:{
        type: DataTypes.STRING(250)
    },
    secondarySpecialEducationDiplomaScan:{
        type: DataTypes.STRING(250)
    },
    highEducationDiplomaScan:{
        type: DataTypes.STRING(250)
    },
    equivalenceOfSpecialtyDocScan:{
        type: DataTypes.STRING(250)
    },
    medicalActivityDocScan:{
        type: DataTypes.STRING(250)
    },
    healthCertificateScan:{
        type: DataTypes.STRING(250)
    },
    militaryRegistrationDocumentScan:{
        type: DataTypes.STRING(250)
    },
    militaryIDDocumentScan:{
        type: DataTypes.STRING(250)
    },
    paymentChekScan:{
        type: DataTypes.STRING(250)
    },
    cartType:{
        type: DataTypes.INTEGER(11)
    },
    cardBinCode:{
        type: DataTypes.STRING(250)
    },
    EntranceYear:{
        type: DataTypes.INTEGER(11)
    },
    militaryService:{
        type: DataTypes.INTEGER(11)
    },
    is_new_payment:{
        type: DataTypes.TINYINT(1)
    },
    reject_description:{
        type: DataTypes.TEXT
    },
    specialtyName:{
        type: DataTypes.STRING(250)
    },
    reject_files:{
        type: DataTypes.TEXT
    },
    custom_password:{
        type: DataTypes.STRING(250)
    },
    tur:{
        type: DataTypes.TINYINT(2).UNSIGNED
    },
    isSend:{
        type: DataTypes.INTEGER(1),
        allowNull: false ,
        defaultValue: 0
    },
    create_date:{
        type: DataTypes.DATE ,
        allowNull: false ,
        defaultValue: DataTypes.NOW
    },
    preparation:{
        type: DataTypes.STRING(250)
    },
    factorStudyAz:{
        type: DataTypes.STRING(250)
    },
    entranceSubSpecialization:{
        type: DataTypes.STRING(250)
    },
    entranceSubSpecialty:{
        type: DataTypes.STRING(250)
    },
    entranceSpecialization:{
        type: DataTypes.STRING(250)
    },
    previousBasicEducation:{
        type: DataTypes.STRING(250)
    },
    teachingYear:{
        type: DataTypes.STRING(250)
    },
    preparation_amount:{
        type: DataTypes.STRING(250)
    },
    update_date:{
        type: DataTypes.DATE
    },
    checkCustomPassword:{
        type: DataTypes.STRING(250)
    },
    customPassword:{
        type: DataTypes.STRING(250)
    },
    previousInstitutionName:{
        type: DataTypes.STRING(250)
    },
    semester:{
        type: DataTypes.TINYINT(2)
    },
    preparation_amunt:{
        type: DataTypes.INTEGER(11)
    },
    payment_method:{
        type: DataTypes.TINYINT(2)
    },
    hasDiscount:{
        type: DataTypes.TINYINT(2)
    },
    isHaveIELTS:{
        type: DataTypes.TINYINT(2)
    },
    examForeignLanguage:{
        type: DataTypes.TINYINT(2)
    },
    isEmployee:{
        type: DataTypes.STRING(2)
    }
},{
    indexes:[{
        name: 'student_appeals_index',
        using: 'BTREE',
        fields: ['create_date', 'fin', 'user_id']
}]
});

module.exports =  student_appeals  ;