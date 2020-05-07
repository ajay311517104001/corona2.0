const axios = require('axios');
var cors = require('cors')

exports.get_global_values= function(req,res){
   var ar={
       name:'ajay',
       age:'20'
   }
  
res.json(ar)
   console.log(ar)
    console.log('it works')
}