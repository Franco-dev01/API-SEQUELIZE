const Sequelize = require('sequelize');
const Model  = Sequelize.Model;
const sequelize  = require('../Settings/sequelize.connect').test;
class User extends Model {}
User.init({
nomCat: Sequelize.STRING,
desCat: Sequelize.STRING,
},
{ 
    sequelize,
     modelName: 'categorie' 
    });

   // User.sync({force:true}).then();
module.exports =User