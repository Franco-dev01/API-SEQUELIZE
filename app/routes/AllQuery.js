var express = require('express');
var router = express.Router();
const query1=require('../models/categorie.sequelize');
const query2=require('../models/produit.sequelize');


/* GET users listing. */

router.get('/allQuery',async function(req, res, next) {
    const cat= await query1.findAll().then(result=>result)
    const prod= await query2.findAll().then(result=>result)
    res.json({status:true,message:'finding sacceded',prod,cat});
});

module.exports = router;
