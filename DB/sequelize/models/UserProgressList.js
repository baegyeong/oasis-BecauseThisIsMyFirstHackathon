
const { DataTypes, Sequelize } = require('sequelize');

module.exports = class UserProgressList extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        UPLName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false,
      },
      UPLExplain: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
      },
      UPL100: {
        type: DataTypes.BOOLEAN(100),
        allowNull: true,
        unique: false,
      },
      UPL300: {
        type: DataTypes.BOOLEAN(100),
        allowNull: true,
        unique: false,
      },
      UPL500: {
        type: DataTypes.BOOLEAN(100),
        allowNull: true,
        unique: false,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'UserProgressList',
      tableName: 'userProgressList',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.UserProgressList.belongsTo (db.Member)
  }
};