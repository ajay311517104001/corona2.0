var axios=require('axios')
var fetch=require('node-fetch')


fetch('http://localhost:5000/')
.then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))

console.log('-------------------------------------------------------')
//axios.get('http://localhost:5000/')
//.then((res)=> res).then((data)=>console.log(data)).catch((err)=>console.log(err))
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')