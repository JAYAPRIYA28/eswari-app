import React from 'react'
import {useState, useEffect} from 'react';
import Navbar from './Navbar'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";

function PVC() {

    var sarr = []

    const [name, setName] = useState();
    const [item_name, setItem_name] = useState();
    const [first_inches, setFirst_inches] = useState();
    const [cost, setCost] = useState();

    const [data, setData] = useState([]);

    const [display, setDisplay] = useState(false);

    const [sValue, setSvalue] = useState([]);

    const handleClick = async() => {
        try{
            axios.post("/pvc",{
                name:name,
                item_name:item_name,
                first_inches:first_inches,
                cost:cost,
                nameItem:item_name+first_inches+"mm"
            })
            .then(res=>{
                console.log(res.data)
            })

            window.location.reload()
            
        }catch(err){
            console.log(err)
        }
    }


    const dataFetch = async() => {
        try{
            const response = await fetch("/pvcother")
            const responseData = await response.json();

            setData(responseData.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
      dataFetch();
      
    },[])

    const handleSubmit = async(e)=> {
    

        if(e.target.value === ""){
          setDisplay(false)
        }else{
          setDisplay(true)
        }
       
        
      //  console.log(e.target.value)
      const res = await fetch(`/pvcgetSecific/${e.target.value}`);
      const content = await res.json();
      setSvalue(content.data);
      
     
    
    
    }

    // console.log(sValue)
    
  
    

    // console.log(data)
  return (
    <div>
    <Navbar/>
    <div className='ml-10'>
    <Stack spacing={2}  className="lg:mr-60 ml-96 mt-5 sm:mr-14 w-96 h-20 "  onSelect={handleSubmit} >
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={data.map((option)=>option.nameitem)}
        onChange={(e)=>{
          console.log(e.target.options)
        }}
       onClick
        renderInput={(params) => <TextField {...params
        } label="Search..." />}
      />

    </Stack>
    </div>
    <div className='border-2 ml-10 mr-10'>
    <div className='flex mt-3'>
    <p className='text-xl ml-5 font-bold mr-28'>SL.NO</p>
    <p className='text-xl mr-28 font-bold ml-3'>BRAND</p>
    <p className='text-xl ml-3 font-bold mr-28'>PRODUCT</p>
    <p className='text-xl ml-3 font-bold mr-28'>INCHES</p>
    <p className='text-xl ml-3 font-bold mr-28'>COST</p>
    <p className='text-xl ml-3 font-bold mr-5'>SELECT ITEM</p>
    
    </div>
    <hr className='mt-3 mb-3 font-bold'/>
    <div > 
    {display ? <div>
     <div>
       {sValue.map((data,i)=>
       <div className="flex mb-3">
         <p className="ml-10 text-xl w-5 ">{i+1}</p>
         <p className="ml-40 text-xl w-48">{data.name}</p>
         <p className= "w-48 text-xl">{data.item_name}</p>
         <p className= "ml-6 w-14 text-xl">{data.first_inches}</p>
         <p className= "ml-32 w-12 text-xl">{data.cost}</p>
         <input className= "ml-40" type="checkbox" unChecked onClick={
            ()=>{
       
       var flag=0; 
      
       for(var j=0; j<sarr.length; j++){
           if(i === sarr[j]){
            
             for (var k = 0; k < sarr.length; k++) {
             if (sarr[k] === i) {
                 sarr.splice(k, 1);
                var sl_no = i+1;
                console.log(sl_no)
              axios.delete(`/item/${data.item_name}/${sl_no}`)
              
              
         .then(res=>{
           
           console.log(res);
         })
         .catch((err)=>{
           console.log(err.message);
           console.log("hello")
         })
   
                }
             }
           
             
             flag=1;
           }
       }
       if(flag===0){
         sarr.push(i)
         axios.post("/item/itempost",{
           first_inches:data.first_inches,
           item_name:data.item_name,
           cost:data.cost,
           sl_no:i+1,
           name: data.name
         })
         .then(res=>{
           console.log(res.data);
         })
       }

      
    //   console.log(sarr)
       } 
         }></input>
       </div>
       )}
       </div>
      
    </div> : 
       <div>
       {data.map((data,i)=>
       <div className="flex mb-3">
         <p className="ml-10 text-xl w-5 ">{i+1}</p>
         <p className="ml-40 text-xl w-48">PVC</p>
         <p className= "w-48 text-xl">{data.item_name}</p>
         <p className= "ml-6 w-14 text-xl">{data.first_inches}</p>
         <p className= "ml-32 w-12 text-xl">{data.cost}</p>
         <input className= "ml-40" type="checkbox" onClick={
            ()=>{
       
       var flag=0; 
      
       for(var j=0; j<sarr.length; j++){
           if(i === sarr[j]){
            
             for (var k = 0; k < sarr.length; k++) {
             if (sarr[k] === i) {
                 sarr.splice(k, 1);
                var sl_no = i+1;
                console.log(sl_no)
              axios.delete(`/item/${data.item_name}/${sl_no}`)
              
              
         .then(res=>{
           
           console.log(res);
         })
         .catch((err)=>{
           console.log(err.message);
           console.log("hello")
         })
   
                }
             }
           
             
             flag=1;
           }
       }
       if(flag===0){
         sarr.push(i)
         axios.post("/item/itempost",{
           first_inches:data.first_inches,
           item_name:data.item_name,
           cost:data.cost,
           sl_no:i+1,
           name: "PVC"
         })
         .then(res=>{
           console.log(res.data);
         })
       }

      
    //   console.log(sarr)
       } 
         }></input>
       </div>
       )}
       </div>
       }
       <div className='flex'>
        <input className='border-2 ml-44 w-36 pl-3 ' value="PVC" placeholder='Brand' onChange={(e)=>
            setName(e.target.value)
        }></input>
        <input className='border-2 ml-16 w-36 pl-3 ' placeholder='Product' onChange={(e)=>{
            setItem_name(e.target.value)
        }}></input>
        <input className='border-2 ml-16 w-36 pl-3 ' placeholder='Inches' onChange={(e)=>{
            setFirst_inches(e.target.value)
        }}></input>
        <input className='border-2 ml-16 w-36 pl-3 ' placeholder='Cost'onChange={(e)=>{
            setCost(e.target.value)
        }}></input>
        <button className='bg-sky-900 text-white ml-10 w-32   h-10  border-solid rounded-xl border-4 border-light-blue-500 text-lg  opacity-100' onClick={handleClick}>Add item</button>
        </div>
    </div>
    </div>

    PVC</div>
  )
}

export default PVC