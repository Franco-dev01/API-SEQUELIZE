var express = require('express');
var router = express.Router();
const prod=  require ('../models/produit.sequelize')
const cat=  require ('../models/categorie.sequelize')

/* GET home page. */
router.get('/', async function(req, res, next) {
 
 var QueryCat=await cat.findAll().then(docs => docs)
 console.log(QueryCat);
 res.render('registe',{docs:QueryCat})
 
});

router.post('/', async function(req, res, next) {
  
  if (req.body.type === "produit" ){
    console.log(req.body);
    prod.create({
      nomP:req.body.nomP,
      desP:req.body.desP,
      prixP:req.body.prixP,
      currentCategorieId:req.body.cat_id

    
    })
    .then(dataP => {

      console.log(dataP.toJSON());
      res.redirect('/')
    });

  }else{
    
    cat.create({
      nomCat:req.body.nomCat,
      desCat:req.body.desCat,
    })
    .then(dataC => {
    console.log(dataC.toJSON());
    res.redirect('/')
    });
  }
});
module.exports = router;