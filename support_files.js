const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const support_files = sequelize.define('support_files', {
   id:{
    type: DataTypes.INTEGER(11) ,
    allowNull: false ,
    autoIncrement: true ,
    primaryKey: true
   } ,
   support_apply_id:{
    type: DataTypes.INTEGER(11)
   },
   doc_scan:{
    type: DataTypes.STRING(250) ,
    defaultValue: ''
   }
},{
   charset:'latin1' ,
   collate:'latin1_swedish_ci'
});

module.exports =  support_files ;