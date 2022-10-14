'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Productos.belongsTo(models.Categoria, {
        foreignKey:'id',
        target_key:'idCategoria'
      })
    }
  }
  Productos.init({
    descripcion: DataTypes.STRING,
    idCategoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};