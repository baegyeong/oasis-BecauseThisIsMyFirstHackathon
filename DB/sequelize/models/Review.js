const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Review extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      reviewCategory: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
      },
      reviewTitle: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
      },
      reviewAuthor: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
      },
      reviewCount: {
        type: DataTypes.INTEGER(100),
        allowNull: true,
        unique: false,
      },
      reviewContent: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Review',
      tableName: 'reviews',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.Review.hasMany(db.Comment)
    db.Review.belongsTo(db.Member)
  }
};