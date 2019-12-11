var express = require('express');
var router = express.Router();
const query1=require('../models/categorie.sequelize');
const query2=require('../models/produit.sequelize');

/* GET users listing. */
router.get('/del', async function(req, res, next) {
    let q1;
    if(req.query.delCatId != null){
        q1 =await query1.destroy({where:{id:parseInt(req.query.delCatId)}}).then(result=>result)
    }else if(req.query.delProdId != null){
        q1 =await query2.destroy({where:{id:parseInt(req.query.delProdId)}}).then(result=>result)
    }
    if(q1===0){
        res.json({status:false,messages:'element non trouvé'})
    }else{
        res.json({status:true,message:'delete succeded'});
    }
});
module.exports = router;
