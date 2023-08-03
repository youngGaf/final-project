const router = require('express').Router();

router.get('/hello', (req,res) =>{
 return res.status(200).json({status: 200, message: "Hello from server"});  
});

module.exports = router;