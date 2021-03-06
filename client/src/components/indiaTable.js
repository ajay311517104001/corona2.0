import React from 'react';

import '../components/indiaTable.scss';
import axios from 'axios'
import { Table } from 'react-bootstrap'


import ReactLoading from "react-loading";



class Display extends React.Component {
  
  
  render() { 
   
    if(this.props.valuE===false){
      var val= <ReactLoading type='spokes' color='grey' height={100} width={100} />
    }
    return (<div className="loading"><center>{val}</center></div>  );
  }
}
 
class Glob extends React.Component{
  render(){
    return(
       <div class="contain">
  <div class="item" style={{color:'red'}}><br></br><div><h5>Confirmed</h5></div><br></br><h5>[+{this.props.glob.deltaconfirmed}]</h5><h3><b>{this.props.glob.confirmed}</b></h3></div>
  <div class="item"style={{color:'blue'}}><br></br><div><h5>Active</h5></div><br></br><br></br><h3><b>{this.props.glob.active}</b></h3></div>
  <div class="item"style={{color:'green'}}><br></br><div><h5>Recovered</h5></div><br></br><h5>[+{this.props.glob.deltarecovered}]</h5><h3><b>{this.props.glob.recovered}</b></h3></div>
  <div class="item"style={{color:'grey'}}><br></br><div><h5>Deceased</h5></div><br></br><h5>[+{this.props.glob.deltadeaths}]</h5><h3><b>{this.props.glob.deaths}</b></h3></div>
  
</div>

     
    )
  }
}




class IndiaTable extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      items:[],
      gob:[],
      flag:false,
      
    }
  }


 async componentDidMount(){
  await axios.get("/india")
  .then((response)=>{
    console.log(response.data)
    this.setState({items:response.data.statewise.slice(1,(response.data.statewise).length),gob:response.data.statewise[0],flag:true})})
  .catch((err)=>console.log(err))
 

  
   
    
   
  }

 
render(){
  var count=0
for (var i=0;i<this.state.items.length;i++){
  if (this.state.items[i].confirmed=='0'){
    count=count+1;
  }
}

console.log( Date().split(' '))

 
  return(
    <div>
      <Glob glob={this.state.gob} />
  

  <Display valuE={this.state.flag} />

<div class="container">



  <ul class="responsive-table">
  <center><h2>INDIA-STATEWISE</h2><h6>{this.state.items.length-count}  States/UTS Affected</h6></center> 

    <li class="table-header">
      <div class="col-3 col-1"  ><b>STATES</b></div>
      <div class="col-2 col-1"><b>CONFIRMED</b></div>
      <div class="col  col-1"><b>ACTIVE</b></div>
      <div class="col col-2"><b>RECOVERED</b></div>
      <div class="col col-2"><b>DEATHS</b></div>
    </li>
    {
 
    this.state.items.map(item=> 
     
    <li class="table-row">
      <div class="col-3 col-1" key={item.id}> {item.state}<br></br><small>lastupdate:{item.lastupdatedtime} </small></div>
      <div class="col-1 col-2 " key={item.id} style={{color:'red'}}> <large ><b>{item.confirmed}</b> </large><small ><b>⇧{item.deltaconfirmed}</b></small></div>
      <div  class="col col-1 " key={item.id} style={{color:'blue'}}><b>{item.active}</b></div>
      <div class="col- col-2" style={{color:'green'}}> <large ><b>{item.recovered}</b> </large><small ><b>⇧{item.deltarecovered}</b></small></div>
      <div class="col col-2"style={{color:'grey'}}> <large ><b>{item.deaths}</b> </large><small ><b>⇧{item.deltadeaths}</b></small></div>
    </li>)}
  </ul>
    </div>

    </div>

         
    )}
  
  
}

export default IndiaTable;