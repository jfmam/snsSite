module.exports=(sequelize,DataTypes)=>{
    const Post=sequelize.define('Post',{//테이블명이 posts로 변한다
        content:{
            type:DataTypes.TEXT,//매우긴글
            allowNull:false
        }
    },
    {
        charset:'utf8mb4',//한글 +이모티콘
        collate:'utf8mb4_general_ci'
    });
    Post.associate=(db)=>{
        db.Post.belongsTo(db.User);//hasMany의 반대 유저가 많은 Post를 갖느다
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.HashTag,{through:'PostHashTag'})//define으로 정의해준부분
    }
    return Post;
}