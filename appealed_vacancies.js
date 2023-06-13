const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Appealed_vacancies = sequelize.define('appealed_vacancies', {
    id:{
        type:DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: true
    },
    user_id:{
        type:DataTypes.INTEGER(11),
        allowNull: false 
    },
    vacancy_appeals_id:{
        type:DataTypes.INTEGER(11) 
    },
    vacancy_id:{
        type:DataTypes.INTEGER(11) ,
        allowNull: false 
    },
    districts:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    enterprises:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    corpuses:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    modules:{
        type: DataTypes.STRING(250)  ,
        defaultValue: '' 
    },
    vacant_load:{
        type: DataTypes.INTEGER(3)   
    },
    vacant_place:{
        type: DataTypes.INTEGER(3) 
    },
    status:{
        type: DataTypes.TINYINT(1) ,
        defaultValue: 0 ,
        comment: '0,1 - Yeni, 2 - Müsahibəyə buraxıldı, 3 - Müsahibəyə buraxılmadı, 4 - Müsahibədən keçdi, 5 - Müsahibədən keçmədi, 6 - Qəbul oldu, 7 - Qəbul olmadı, 8 - Sənədlərini təqdim etməkdən imtina elədi, 9 - Sənədlərini geri götürdü, 10 - İmtahandan keçdi/Müsahibəyə buraxıldı, 11 - İmtahandan keçmədi'
    },
    teaching_language:{
        type: DataTypes.STRING(100) 
    },
    priority:{
        type: DataTypes.TINYINT(1)  
    },
    position:{
        type: DataTypes.STRING(250) 
    },
    position_id:{
        type: DataTypes.TINYINT(3) 
    },
    reasonMessage:{
        type: DataTypes.STRING(250)
    }
});

module.exports = Appealed_vacancies ;