module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        content: {
            type: DataTypes.STRING(200), //매우긴글
            allowNull: false
        }
    }, {
        charset: 'utf8mb4', //한글 +이모티콘
        collate: 'utf8mb4_general_ci'
    });
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post); //hasMany의 반대 유저가 많은 Post를 갖느다
      
    }
    return Image;
}