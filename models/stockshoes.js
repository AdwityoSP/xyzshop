'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StockShoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StockShoes.init({
    masterId: DataTypes.INTEGER,
    detailId: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StockShoes',
  });

  StockShoes.associate = function (models) {
    StockShoes.belongsTo(models.DetailShoes, { foreignKey: 'detailId', as: 'DetailShoes' })
    StockShoes.belongsTo(models.MasterShoes, { foreignKey: 'masterId', as: 'MasterShoes' })

    // StockShoes.hasMany(models.DetailShoes, {
    //   foreignKey: 'detalId',
    //   as: 'ShoesDetail'
    // })

    // StockShoes.hasMany(models.MasterShoes, {
    //   foreignKey: 'masterId',
    //   as: 'ShoesMaster'
    // })
  }

  return StockShoes;
}