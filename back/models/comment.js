module.exports=(sequelize,DataTypes)=>{
    const Comment=sequelize.define('Comment',{
        content:{
            type:DataTypes.TEXT,//매우긴글
            allowNull:false
        }
    },
    {
        charset:'utf8mb4',//한글 +이모티콘
        collate:'utf8mb4_general_ci'
    });
    Comment.associate=(db)=>{
        db.Post.belongsTo(db.User);//hasMany의 반대 유저가 많은 Post를 갖느다
         db.Post.belongsTo(db.Post);
    }
    return Comment;
}