const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const miq_neticeler = sequelize.define('miq_neticeler', {
   id:{
    type: DataTypes.INTEGER(11) ,
    allowNull: false ,
    autoIncrement: true ,
    primaryKey: true
   } ,
   user_id:{
    type: DataTypes.INTEGER(11) ,
   },
   fin:{
    type: DataTypes.STRING(100)
   },
   ad:{
    type: DataTypes.STRING(100)
   },
   soyad:{
    type: DataTypes.STRING(100)
   },
   ata_adi:{
    type: DataTypes.STRING(100)
   },
   peshe_istiqameti:{
    type: DataTypes.STRING(100)
   },
   ixtisas_duz:{
    type: DataTypes.INTEGER(11)
   },
   ixtisas_sehv:{
    type: DataTypes.INTEGER(11)
   },
   ixtisas_cavablandirilmayan:{
    type: DataTypes.INTEGER(11)
   },
   metodika_duz:{
    type: DataTypes.INTEGER(11)
   },
   metodika_sehv:{
    type: DataTypes.INTEGER(11)
   },
   metodika_cavablandirilmayan:{
    type: DataTypes.INTEGER(11)
   },
   mentiq_duz:{
    type: DataTypes.INTEGER(11)
   },
   mentiq_sehv:{
    type: DataTypes.INTEGER(11)
   },
   mentiq_cavablandirilmayan:{
    type: DataTypes.INTEGER(11)
   },
   umumi_duz:{
    type: DataTypes.INTEGER(11)
   },
   umumi_sehv:{
    type: DataTypes.INTEGER(11)
   },
   umumi_cavablandirilmayan:{
    type: DataTypes.INTEGER(11)
   },
   imtahan_gunu:{
    type: DataTypes.STRING(100)
   },
   seans:{
    type: DataTypes.STRING(100)
   },
   bashlama_vaxti:{
    type: DataTypes.STRING(100)
   },
   bitirme_vaxti:{
    type: DataTypes.STRING(100)
   },
   istifade_edilen_deqiqe:{
    type: DataTypes.INTEGER(11)
   },
   elave_olunmush_deqiqe:{
    type: DataTypes.INTEGER(11)
   }
},{
   collate:'utf8mb3_unicode_ci'
});

module.exports =  miq_neticeler  ;