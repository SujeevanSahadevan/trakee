import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
import Datatable from './components/Datatable'

const myObject=[
  {
    id: "LK1",
    customer: {
      name: "Adams Baker",
      city: "Colombo"
    },
    branch: "Colombo",
    service: "Dry Cleaning",
    status: "Active",
    reference: "Ord_1",
    addedby: "Manager"
  },
  {
    id: "LK2",
    customer: {
      name: "Clark Davis",
      city: "Kandy"
    },
    branch: "Kandy",
    service: "Wash Only",
    status: "Active",
    reference: "Ord_2",
    addedby: "Admin"
  }
]

function App() {
const [data,setData]=useState([]);
const [queryFilter,setqueryFilter]=useState('');

// useEffect(()=>{
//   setData(myObject);
// })

//Getting Data from remote json site
useEffect(()=>{
  axios.get("https://my-json-server.typicode.com/dsrishi/orders/orders").then(response=>setData(response.data))
},[])

// useEffect(()=>{
// fetch("https://my-json-server.typicode.com/dsrishi/orders/orders")
// .then((response)=>response.json())
// .then((json)=>setData(json))
// },[])

function search(rows){
return rows.filter(row=>row.id.toLowerCase().indexOf(queryFilter)>-1)
}

  return (
    <div className="App">
     <h1>Trakee app</h1>
     {/* <div>
       <label className="label">Search</label>
       <input className="search" type="text" value={queryFilter} onChange={(e)=>setqueryFilter(e.target.value)} ></input>
     </div> */}
     <div><Datatable data={data} /></div> 
     

    </div>
  );
}

export default App;
