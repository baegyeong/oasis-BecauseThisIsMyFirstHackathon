
const { DataTypes, Sequelize } = require('sequelize');

module.exports = class ProgressList extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      PLName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false,
      },
      PLExplain: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
      },
      PL100: {
        type: DataTypes.BOOLEAN(100),
        allowNull: true,
        unique: false,
      },
      PL300: {
        type: DataTypes.BOOLEAN(100),
        allowNull: true,
        unique: false,
      },
      PL500: {
        type: DataTypes.BOOLEAN(100),
        allowNull: true,
        unique: false,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'ProgressList',
      tableName: 'progressLists',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};