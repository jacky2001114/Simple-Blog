var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index');
})
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
	
	
		res.redirect('/users/login');
	}
}



module.exports = router;