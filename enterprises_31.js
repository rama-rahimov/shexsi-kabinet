const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Enterprises_31 = sequelize.define('enterprises_31', {
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    enterprises_id:{
        type: DataTypes.INTEGER(11)
    },
    name:{
        type: DataTypes.STRING(200)
    },
    create_date:{
        type: DataTypes.STRING(30)
    },
    subordination:{
        type: DataTypes.INTEGER(11)
    },
    district:{
        type: DataTypes.INTEGER(11)
    },
    species:{
        type: DataTypes.INTEGER(11)
    },
    end_date:{
        type: DataTypes.STRING(30)
    },
    teaching_week:{
        type: DataTypes.INTEGER(11)
    },
    teaching_year:{
        type: DataTypes.INTEGER(11)
    },
    accreditation:{
        type: DataTypes.STRING(30)
    },
    queue:{
        type: DataTypes.STRING(30)
    },
    profile:{
        type: DataTypes.STRING(30)
    },
    teaching_language:{
        type: DataTypes.STRING(30)
    },
    foreign_language:{
        type: DataTypes.STRING(50)
    },
    special_care:{
        type: DataTypes.STRING(300)
    },
    admission_plan:{
        type: DataTypes.STRING(300)
    },
    count_corpus:{
        type: DataTypes.INTEGER(11)
    },
    penitentiary:{
        type: DataTypes.INTEGER(5) ,
        defaultValue: 0 ,
        comment: 'cəzaçəkmə müəssisəsi nəzdindədirmi'
    },
    voen:{
        type: DataTypes.STRING(155)
    },
    construction:{
        type: DataTypes.STRING(300) ,
        comment:'Tikinti altında olan ərazi'
    },
    territory:{
        type: DataTypes.STRING(300) ,
        comment:'İstifadə olunan ərazi'
    },
    extra_budgetary_funds:{
        type: DataTypes.STRING(300),
        comment:'Büdcədənkənar vəsait'
    },
    ownership:{
        type: DataTypes.STRING(300) ,
        comment: 'Sahibkarlıq'
    },
    total_area:{
        type: DataTypes.STRING(15) ,
        comment: 'Ümumi sahə (korpuslar cəmi)'
    },
    image:{
        type: DataTypes.STRING(300)
    },
    thumb:{
        type: DataTypes.STRING(300)
    },
    edu_teaching_year:{
        type: DataTypes.INTEGER(11)
    },
    education_doc_type:{
        type: DataTypes.INTEGER(11)
    },
    series:{
        type: DataTypes.STRING(45)
    },
    start_date:{
        type: DataTypes.STRING(45)
    },
    edu_doc_end_date:{
        type: DataTypes.STRING(45)
    },
    count:{
        type: DataTypes.STRING(45)
    },
    differing:{
        type: DataTypes.INTEGER(11)
    },
    region:{
        type: DataTypes.INTEGER(11)
    },
    accreditation_date:{
        type: DataTypes.STRING(45)
    },
    status:{
        type: DataTypes.TINYINT(2) ,
        defaultValue: 1
    },
    deleted:{
        type: DataTypes.TINYINT(2) ,
        defaultValue: 0
    },
    deleted_at:{
        type: DataTypes.STRING(100)
    },
    teaching_year_list:{
        type: DataTypes.STRING(100)
    },
    inp_r1:{
        type: DataTypes.STRING(10) ,
        defaultValue: '0' ,
        comment: 'Ödənişli qəbuldan'
    },
    inp_r2:{
        type: DataTypes.STRING(10) ,
        defaultValue: '0' ,
        comment: 'Şagirdlərin istehsalat təcrübəsindən'
    },
    inp_r3:{
        type: DataTypes.STRING(10) ,
        defaultValue: '0' ,
        comment: 'Emalatxanalardan'
    },
    inp_r4:{
        type: DataTypes.STRING(10) ,
        defaultValue: '0' ,
        comment: 'Təlim - təsərrüfat sahələrindən'
    },
    inp_r5:{
        type: DataTypes.STRING(10) ,
        defaultValue: '0' ,
        comment: 'Cəmi'
    },
    student_place:{
        type: DataTypes.STRING(10) ,
        defaultValue: '0'
    }
},{
    freezeTableName: true ,
    indexes:[{
        name: 'enterprises_31_index',
        using: 'BTREE',
        fields: ['subordination', 'district', 'species']
    }],
    collate:'utf8mb3_unicode_ci'
});

module.exports =  Enterprises_31  ;