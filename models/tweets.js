'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tweets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tweets.init({
    user_id: DataTypes.INTEGER,
    tweet: DataTypes.STRING,
    img_url: DataTypes.STRING
  },{  
    defaultScope:{
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },

    sequelize,
    modelName: 'tweets',
  });
  return tweets;
};