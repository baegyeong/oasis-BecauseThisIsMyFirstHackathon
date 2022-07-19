const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Member extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      memberNumber: {
        type: DataTypes.INTEGER(100),
        allowNull: true,
        unique: false,
      },
      memberPassword: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      memberName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Member',
      tableName: 'members',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.Member.hasMany (db.Review)
    db.Member.hasMany (db.Inquiry)
    db.Member.hasMany (db.Journal)
    db.Member.hasOne (db.UserProgressList)

  }
};