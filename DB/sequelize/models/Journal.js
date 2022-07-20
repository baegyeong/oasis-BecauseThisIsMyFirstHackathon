const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Journal extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      journalDate: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false,
      },
      journalHours: {
        type: DataTypes.INTEGER(100),
        allowNull: true,
        unique: false,
      },
      journalEtc: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Journal',
      tableName: 'journals',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.Journal.belongsTo(db.Member)
  }
};