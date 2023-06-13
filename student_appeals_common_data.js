const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const student_appeals_common_data = sequelize.define('student_appeals_common_data', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    student_appeal_id:{
        type: DataTypes.INTEGER(11) 
    },
    user_id:{
        type: DataTypes.INTEGER(11) 
    },
    socialStep:{
        type: DataTypes.TINYINT(1)
    },
    socialDecisionReason:{
        type: DataTypes.STRING(250)
    },
    changeName:{
        type: DataTypes.TINYINT(1)
    },
    territorialIntegrityDisability:{
        type: DataTypes.STRING(250)
    },
    birthCertificate:{
        type: DataTypes.STRING(250)
    },
    changeNameDoc:{
        type: DataTypes.STRING(250)
    },
    typeHeroism:{
        type: DataTypes.TINYINT(1)
    },
    territorialIntegrityDeath:{
        type: DataTypes.STRING(250)
    },
    militaryOperationMissing:{
        type: DataTypes.STRING(250)
    },
    militaryOperationDeath:{
        type: DataTypes.STRING(250)
    },
    degreeKinship:{
        type: DataTypes.TINYINT(1)
    },
    marriageCertificate:{
        type: DataTypes.STRING(250)
    },
    birthCertificateOfMartyredChild:{
        type: DataTypes.STRING(250)
    },
    certificateFamilyComposition:{
        type: DataTypes.STRING(250)
    },
    certificateFamilyCompositionOther:{
        type: DataTypes.STRING(250)
    },
    documentConfirmingDisability:{
        type: DataTypes.STRING(250)
    },
    degreeDisability:{
        type: DataTypes.TINYINT(1)
    },
    degreeDisabilityIDoc:{
        type: DataTypes.STRING(250)
    },
    degreeDisabilityIIDoc:{
        type: DataTypes.STRING(250) 
    },
    reasonOrphanhood:{
        type: DataTypes.TINYINT(1)
    },
    deprivationParentalCare:{
        type: DataTypes.STRING(250) 
    },
    documentParentsUnknown:{
        type: DataTypes.STRING(250) 
    },
    deathCertificateParents:{
        type: DataTypes.STRING(250) 
    },
    socialOtherDoc:{
        type: DataTypes.STRING(250) 
    },
    description:{
        type: DataTypes.STRING(250) 
    },
    socialDescription:{
        type: DataTypes.STRING(250) 
    },
    deprivationParentalCareDoc2:{
        type: DataTypes.STRING(250) 
    },
    deprivationParentalCareDoc3:{
        type: DataTypes.STRING(250) 
    },
    deprivationParentalCareDoc4:{
        type: DataTypes.STRING(250) 
    },
    deprivationParentalCareDoc5:{
        type: DataTypes.STRING(250) 
    },
    deprivationParentalCareDoc6:{
        type: DataTypes.STRING(250) 
    },
    deprivationParentalCareDoc7:{
        type: DataTypes.STRING(250) 
    },
    deprivationParentalCareDoc8:{
        type: DataTypes.STRING(250) 
    },
    documentStatusIDP:{
        type: DataTypes.STRING(250) 
    },
    doubleScholarship:{
        type: DataTypes.TINYINT(1)
    },
    studentLoan:{
        type: DataTypes.TINYINT(1)
    },
    studentLoanType:{
        type: DataTypes.TINYINT(1)
    }
},{
    indexes:[{
        name: 'student_appeals_common_data_index',
        using: 'BTREE',
        fields: ['student_appeal_id']
}],
collate:'utf8_unicode_ci'
});

module.exports =  student_appeals_common_data ;