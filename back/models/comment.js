module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('User',{
        nickname:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        userId:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true//primary
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        
    },
        {
            charset: 'utf8',
            collatgeg: 'utf_general_ci'
        }
    )
    User.associate=(db)=>{
        db.User.hasMany(db.post);
        db.User.hasMany(db.comment)
    };
    return User;
}