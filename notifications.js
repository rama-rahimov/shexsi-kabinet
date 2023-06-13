const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const notifications = sequelize.define('notifications',{
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    service:{
        type: DataTypes.STRING(250) ,
        allowNull: false, 
        defaultValue: ''
    } ,
    fin:{
        type: DataTypes.STRING(250) ,
        allowNull: false, 
        defaultValue: '' 
    },
    key:{
        type: DataTypes.STRING(11)
    },
    title:{
        type: DataTypes.STRING(250)
    },
    description:{
        type: DataTypes.TEXT
    },
    extra_data:{
        type: DataTypes.TEXT
    },
    files:{
        type: DataTypes.TEXT
    },
    date:{
        type: DataTypes.DATE ,
        defaultValue: DataTypes.NOW
    }
}, {
    indexes:[{
        name: 'notifications_index',
        using: 'BTREE',
        fields: ['service', 'date']
    }]
});

module.exports =  notifications  ;