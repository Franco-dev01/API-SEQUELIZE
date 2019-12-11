const Sequelize = require('sequelize');
const categorie = require('./categorie.sequelize')
const Model  = Sequelize.Model;
const sequelize  = require('../Settings/sequelize.connect').test;
class User extends Model {}
User.init({
nomP: Sequelize.STRING,
desP: Sequelize.STRING,
prixP: Sequelize.DOUBLE,

},
{ 
    sequelize,
     modelName: 'products' 
    });
    User.belongsTo(categorie,{ as:'current',foreignKey:'currentCategorieId',constraints:true});
  //  User.sync({force:true}).then();
    
module.exports =User