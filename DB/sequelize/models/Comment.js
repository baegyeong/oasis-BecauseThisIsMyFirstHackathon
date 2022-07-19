const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      commentDepth: {
        type: DataTypes.INTEGER(100),
        allowNull: true,
        unique: false,
      },
      commentParentId: {
        type: DataTypes.INTEGER(100),
        allowNull: true,
        unique: false,
      },
      commentContent: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
      },  
      memberId: {
        type: DataTypes.INTEGER(100),
        allowNull: true,
        unique: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'comment',
      tableName: 'comments',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.Comment.belongsTo(db.Review)
    db.Comment.belongsTo(db.Inquiry)
  }
};