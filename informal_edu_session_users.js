const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_session_users = sequelize.define('informal_edu_session_users', {
id:{
    type: DataTypes.BIGINT(20) ,
    allowNull: false ,
    primaryKey: true ,
    autoIncrement: true
},
session_id:{
   type: DataTypes.BIGINT(20)
},
user_id:{
    type: DataTypes.BIGINT(20)
},
status:{
    type: DataTypes.INTEGER(11) ,
    defaultValue: 0
}
});

module.exports =  informal_edu_session_users  ;