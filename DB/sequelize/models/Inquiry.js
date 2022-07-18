const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Inquiry extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      inquiryCategory: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false,
      },
      inquiryTitle: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false,
      },
      inquiryAuthor: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false,
      },
      inquiryCount: {
        type: DataTypes.INTEGER(100),
        allowNull: true,
        unique: false,
      },
      inquiryContent: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Inquiry',
      tableName: 'inquirys',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.Inquiry.hasMany(db.Comment)
    db.Inquiry.belongsTo(db.Member)
  }
};