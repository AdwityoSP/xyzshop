'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailShoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DetailShoes.init({
    name: DataTypes.STRING,
    color: DataTypes.ARRAY(DataTypes.STRING),
    size: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'DetailShoes',
  });

  DetailShoes.associate = function(models){
    DetailShoes.belongsToMany(models.MasterShoes,{
      through:'StockShoes',
      as: 'MasterShoes',
      foreignKey:'detailId'
    })
  }
  return DetailShoes;
};