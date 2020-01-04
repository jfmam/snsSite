module.exports = (sequelize, DataTypes) => {
    const HashTag = sequelize.define('HashTag', {
        content: {
            type: DataTypes.STRING(20), //매우긴글
            allowNull: false
        }
    }, {
        charset: 'utf8mb4', //한글 +이모티콘
        collate: 'utf8mb4_general_ci'
    });
    HashTag.associate = (db) => {
        db.HashTag.belongsToMany(db.Post,{through:'PostHashTag'})//다대다 관계
    }
    return HashTag;
}