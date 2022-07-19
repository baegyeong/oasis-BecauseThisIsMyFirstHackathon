const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Notice extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      noticeTitle: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false,
      },
      noticeAuthor: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false,
      },
      noticeCount: {
        type: DataTypes.INTEGER(100),
        allowNull: true,
        unique: false,
      },
      noticeContent: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Notice',
      tableName: 'notices',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
};