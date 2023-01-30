import React from 'react'
import Navbar from './Navbar'
import axios from "axios";
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import add_image from "../icons8-add-48.png"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';



function FinOlex() {
 
 const [display, setDisplay] = useState(false);
 const [dataCoupler, setDataCoupler] = useState([]);
 const [dataElbow, setDataElbow] = useState([]);
 const[svalue, setSvalue] = useState([]);

const [sData, setsData] = useState([])


 const [ check, setCheck] = useState([]);


 const [editCost, setEditcost] = useState()

 const [addItem, setAddItem ] = useState(false)

 const [addDisplay, setAddDisplay] = useState(false)

 const [elbowInches, setElbowInches] = useState();
 const [elbowCost, setElbowCost] = useState();

 const [CouplerInches, setCouplerInches] = useState();
 const [CouplerCost, setCouplerCost] = useState();


 const [ addItemCoupler, setAddItemCoupler] = useState(false)

 const [addDisplayCoupler, setaddDisplayCoupler] = useState(false)


 const [ endcap, setEndcap] = useState([])
 const [EndcapInches, setEndcapInches] = useState();
 const [EndcapCost, setEndcapCost] = useState();
 const [addItemEndcap, setAddItemEndcap ] = useState(false)

 const [addDisplayEndcap, setAddDisplayEndcap] = useState(false)

 const [ theendcap, setTheendcap] = useState([])
 const [TheEndcapInches, setTheEndcapInches] = useState();
 const [TheEndcapCost, setTheEndcapCost] = useState();
 const [TheaddItemEndcap, setTheAddItemEndcap ] = useState(false)

 const [TheaddDisplayEndcap, setTheAddDisplayEndcap] = useState(false)


 const [ Tkgelbow, setTkgelbow] = useState([])
 const [TkgelbowInches, setTkgelbowInches] = useState();
 const [TkgelbowCost, setTkgelbowCost] = useState();
 const [TkgelbowaddItem, setTkgelbowAddItem ] = useState(false)

 const [TkgelbowaddDisplay, setTkgelbowAddDisplay] = useState(false)


 const [ FTA, setFTA] = useState([])
 const [FTAInches, setFTAInches] = useState();
 const [FTACost, setFTACost] = useState();
 const [FTAaddItem, setFTAAddItem ] = useState(false)

 const [FTAaddDisplay, setFTAAddDisplay] = useState(false)

 const [ MTA, setMTA] = useState([])
 const [MTAInches, setMTAInches] = useState();
 const [MTACost, setMTACost] = useState();
 const [MTAaddItem, setMTAAddItem ] = useState(false)

 const [MTAaddDisplay, setMTAAddDisplay] = useState(false)

 const [ service, setService] = useState([])
 const [serviceInches, setServiceInches] = useState();
 const [serviceCost, setServiceCost] = useState();
 const [serviceaddItem, setServiceAddItem ] = useState(false)

 const [serviceaddDisplay, setServiceAddDisplay] = useState(false)

 const [ TEE, setTEE] = useState([])
 const [TEEInches, setTEEInches] = useState();
 const [TEECost, setTEECost] = useState();
 const [TEEaddItem, setTEEAddItem ] = useState(false)

 const [TEEaddDisplay, setTEEAddDisplay] = useState(false)

 const [ tgTEE, settgTEE] = useState([])
 const [tgTEEInches, settgTEEInches] = useState();
 const [tgTEECost, settgTEECost] = useState();
 const [tgTEEaddItem, settgTEEAddItem ] = useState(false)

 const [tgTEEaddDisplay, settgTEEAddDisplay] = useState(false)

 const [ tail, setTail] = useState([])
 const [tailInches, setTailInches] = useState();
 const [tailCost, setTailCost] = useState();
 const [tailaddItem, setTailAddItem ] = useState(false)

 const [tailaddDisplay, setTailAddDisplay] = useState(false)

 const [ ball, setBall] = useState([])
 const [ballInches, setBallInches] = useState();
 const [ballCost, settgBallCost] = useState();
 const [balladdItem, setBallAddItem ] = useState(false)

 const [balladdDisplay, setBallAddDisplay] = useState(false)

 const [ felbow, setFelbow] = useState([])
 const [felbowInches, setFelbowInches] = useState();
 const [felbowCost, setFelbowCost] = useState();
 const [felbowaddItem, setFelbowAddItem ] = useState(false)

 const [felbowaddDisplay, setFelbowAddDisplay] = useState(false)

 const [ telbow, setTelbow] = useState([])
 const [telbowInches, setTelbowInches] = useState();
 const [telbowCost, setTelbowCost] = useState();
 const [telbowaddItem, setTelbowAddItem ] = useState(false)

 const [telbowaddDisplay, setTelbowAddDisplay] = useState(false)

 
 const [ reducer, setReducer] = useState([])
 const [reducerInches, setReducerInches] = useState();
 const [reducerCost, setReducerCost] = useState();
 const [reduceraddItem, setReducerAddItem ] = useState(false)

 const [reduceraddDisplay, setReducerAddDisplay] = useState(false)

 const [ redb, setRedb] = useState([])
 const [redbInches, setRedbInches] = useState();
 const [redbCost, setRedbCost] = useState();
 const [redbaddItem, setRedbAddItem ] = useState(false)

 const [redbaddDisplay, setRedbAddDisplay] = useState(false)

 const [ redt, setRedt] = useState([])
 const [redtInches, setRedtInches] = useState();
 const [redtCost, setRedtCost] = useState();
 const [redtaddItem, setRedtAddItem ] = useState(false)

 const [redtaddDisplay, setRedtAddDisplay] = useState(false)

 const [ redf, setRedf] = useState([])
 const [redfInches, setRedfInches] = useState();
 const [redfCost, setRedfCost] = useState();
 const [redfaddItem, setRedfAddItem ] = useState(false)

 const [redfaddDisplay, setRedfAddDisplay] = useState(false)

 const [ rede, setRede] = useState([])
 const [redeInches, setRedeInches] = useState();
 const [redeCost, setRedeCost] = useState();
 const [redeaddItem, setRedeAddItem ] = useState(false)

 const [redeaddDisplay, setRedeAddDisplay] = useState(false)

 const [ brassf, setBrassf] = useState([])
 const [brassfInches, setBrassfInches] = useState();
 const [brassfCost, setBrassfCost] = useState();
 const [brassfaddItem, setBrassfAddItem ] = useState(false)

 const [brassfaddDisplay, setBrassfAddDisplay] = useState(false)

 const [ brasst, setBrasst] = useState([])
 const [brasstInches, setBrasstInches] = useState();
 const [brasstCost, setBrasstCost] = useState();
 const [brasstaddItem, setBrasstAddItem ] = useState(false)

 const [brasstaddDisplay, setBrasstAddDisplay] = useState(false)

 const [ brasse, setBrasse] = useState([])
 const [brasseInches, setBrasseInches] = useState();
 const [brasseCost, setBrasseCost] = useState();
 const [brasseaddItem, setBrasseAddItem ] = useState(false)

 const [brasseaddDisplay, setBrasseAddDisplay] = useState(false)

 const [ redm, setRedm] = useState([])
 const [redmInches, setRedmInches] = useState();
 const [redmCost, setRedmCost] = useState();
 const [redmaddItem, setRedmAddItem ] = useState(false)

 const [redmaddDisplay, setRedmAddDisplay] = useState(false)

 var arr = []

 var Earr = []

 var sarr = []

 var Esarr = []



const[x, setX] = useState(
 "" 
);
// console.log(x);

const handleEntry = async(e) =>{
  try{
    const unique_id= e.target.name;
    console.log(unique_id)
    const  editChange = editCost;
    
     axios.post(`/item_change/${editChange}/${unique_id}`)
     window.location.reload(true)
   dataFetch()
  }catch(err){
    console.log(err)
  }
}


 const dataFetch = async ()=>{
  try{
   

   const couplerResponse = await fetch("/coupler");
   const couplerData = await couplerResponse.json();
   //console.log(couplerData.data);
   setDataCoupler(couplerData.data);

   const elbowResponse = await fetch("/elbow");
   const elbowData = await elbowResponse.json();
   setDataElbow(elbowData.data);

   const endcapResponse = await fetch("/endcap");
   const endcapData = await endcapResponse.json();

   setEndcap(endcapData.data)

   const theendcapResponse = await fetch("/theendcap");
   const theendcapData = await theendcapResponse.json();

   setTheendcap(theendcapData.data)

   const TgelbowResponse = await fetch("/10kgelbow");
   const TgelbowData = await TgelbowResponse.json();

   setTkgelbow(TgelbowData.data)

   const FTAResponse = await fetch("/fta");
   const FTAData = await FTAResponse.json();

   setFTA(FTAData.data)

   const MTAResponse = await fetch("/mta");
   const MTAData = await MTAResponse.json();

   setMTA(MTAData.data)

   const serviceResponse = await fetch("/service");
   const serviceData = await serviceResponse.json();

   setService(serviceData.data)

   const teeResponse = await fetch("/tee");
   const teeData = await teeResponse.json();

   setTEE(teeData.data)

   const tgResponse = await fetch("/10kgtee");
   const tgData = await tgResponse.json();

   settgTEE(tgData.data)

   const tailResponse = await fetch("/tail");
   const tailData = await tailResponse.json();

   setTail(tailData.data)

   const ballResponse = await fetch("/ball");
   const ballData = await ballResponse.json();

   setBall(ballData.data)

   const elbowfResponse = await fetch("/elbow45");
   const elbowfData = await elbowfResponse.json();

   setFelbow(elbowfData.data)

   const elbowtResponse = await fetch("/thread");
   const elbowtData = await elbowtResponse.json();

   setTelbow(elbowtData.data)

   const redbResponse = await fetch("/redbush");
   const redbData = await redbResponse.json();

   setRedb(redbData.data)

   const reducerResponse = await fetch("/reducer");
   const reducerData = await reducerResponse.json();

   setReducer(reducerData.data)

   const redtResponse = await fetch("/redtee");
   const redtData = await redtResponse.json();

   setRedt(redtData.data)

   const redfResponse = await fetch("/redfta");
   const redfData = await redfResponse.json();

   setRedf(redfData.data)

   const redeResponse = await fetch("/redelbow");
   const redeData = await redeResponse.json();

   setRede(redeData.data)


   const brassfResponse = await fetch("/brassfta");
   const brassfData = await brassfResponse.json();

   setBrassf(brassfData.data)


   const brasstResponse = await fetch("/brasstee");
   const brasstData = await brasstResponse.json();

   setBrasst(brasstData.data)

   const brasseResponse = await fetch("/brasselbow");
   const brasseData = await brasseResponse.json();

   setBrasse(brasseData.data)

   const redmResponse = await fetch("/redmta");
   const redmData = await redmResponse.json();

   setRedm(redmData.data)

   const resp = await fetch("/check");
   const respData = await resp.json();

   setCheck(respData.data)


   const search = await fetch("/search");
   const searchData = await search.json();

   setsData(searchData.data)


 

  }catch(err){
    console.log(err);
  }
 }

var num = false;

 const dataEmail = useParams();
// console.log(dataEmail.email)
// console.log(check.email)


if(check.email === dataEmail.email){
 num = true
}
console.log(num)

 useEffect(()=>{
  dataFetch();
 },[])

 
// console.log(svalue);

const handleSubmit = async(e)=> {
    

    if(e.target.value === ""){
      setDisplay(false)
    }else{
      setDisplay(true)
    }
   
      
     setX(e.target.value)
  const res = await fetch(`/itemName/${e.target.value}`);
  const content = await res.json();
  setSvalue(content.data);
  
 


}

const handleredm= ()=>{
  setRedmAddItem(true)
  setRedmAddDisplay(true)
  dataFetch();
}

const handleBrasse= ()=>{
  setBrasseAddItem(true)
  setBrasseAddDisplay(true)
  dataFetch();
}

const handleBrasst= ()=>{
  setBrasstAddItem(true)
  setBrasstAddDisplay(true)
  dataFetch();
}

const handleBrassf= ()=>{
  setBrassfAddItem(true)
  setBrassfAddDisplay(true)
  dataFetch();
}

const handleRede= ()=>{
  setRedeAddItem(true)
  setRedeAddDisplay(true)
  dataFetch();
}

const handleRedf= ()=>{
  setRedfAddItem(true)
  setRedfAddDisplay(true)
  dataFetch();
}

const handleRedt= ()=>{
  setRedtAddItem(true)
  setRedtAddDisplay(true)
  dataFetch();
}

const handleRedb= ()=>{
  setRedbAddItem(true)
  setRedbAddDisplay(true)
  dataFetch();
}

const handleReducer= ()=>{
  setReducerAddItem(true)
  setReducerAddDisplay(true)
  dataFetch();
}

const handleTelbow= ()=>{
  setTelbowAddItem(true)
  setTelbowAddDisplay(true)
  dataFetch();
}

const handleFelbow= ()=>{
  setFelbowAddItem(true)
  setFelbowAddDisplay(true)
  dataFetch();
}

const handleBall= ()=>{
  setBallAddItem(true)
  setBallAddDisplay(true)
  dataFetch();
}

const handleTail= ()=>{
  setTailAddItem(true)
  setTailAddDisplay(true)
  dataFetch();
}

const handletgTee= ()=>{
  settgTEEAddItem(true)
  settgTEEAddDisplay(true)
  dataFetch();
}

const handleTee= ()=>{
  setTEEAddItem(true)
  setTEEAddDisplay(true)
  dataFetch();
}

const handleService= ()=>{
  setServiceAddItem(true)
  setServiceAddDisplay(true)
  dataFetch();
}

const handleMTA= ()=>{
  setMTAAddItem(true)
  setMTAAddDisplay(true)
  dataFetch();
}

const handleFTA= ()=>{
  setFTAAddItem(true)
  setFTAAddDisplay(true)
  dataFetch();
}

const handleTkgelbow = ()=>{
  setTkgelbowAddItem(true)
  setTkgelbowAddDisplay(true)
  dataFetch();
}


const handleTheAddEndcap = ()=>{
  setTheAddItemEndcap(true)
  setTheAddDisplayEndcap(true)
  dataFetch();
}


const handleAddEndcap = ()=>{
  setAddItemEndcap(true)
  setAddDisplayEndcap(true)
  dataFetch();
}

const handleAdd = ()=>{
  setAddItem(true)
  setAddDisplay(true)
  dataFetch();
}

const handleAddCoupler = ()=> {
  setAddItemCoupler(true)
  setaddDisplayCoupler(true)
  dataFetch();
}

  return (
<div>
<Navbar/>
<div className='flex lg:mt-5 lg:ml-96  sm:mt-5 sm:ml-40'>


<Stack spacing={2}  className="lg:mr-60 sm:mr-14 w-96 h-20 "  onSelect={handleSubmit}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={sData.map((option) => option.item_name)}
        onChange={(e)=>{
          console.log(e.target.options)
        }}
       
        renderInput={(params) => <TextField {...params
        } label="Search..." />}
      />

    </Stack>

  


   <Link to="/Finolex/signin">
   <button className='font-bold  bg-sky-900 text-white lg:mt-4 sm:mt-0 w-32   h-10  border-solid rounded-xl border-4 border-light-blue-500 text-lg  opacity-100  '>Edit</button>
   </Link>
   </div>

{display? 
<div>
<table className="table-auto  border-2 ">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>{x}</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-16 mr-4'>Cost</p>
        <p className='font-bold ml-16 pr-3'>Select</p>
        <tr className='ml-3 pr-1'></tr>
    </div>
  </thead>    
{ svalue.map((data,i)=>
 <tbody className='border-2'>
 <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4 ml-3'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-3 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex '>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7 mr-5  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      
      <input className='ml-12 pl-5' type="checkbox"  name="data"  onClick={
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
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(sarr)
        }
      }/>
      
    </tr>
    </tbody> 
 )
}
 </table>
</div>

 :

 

<div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-4 sm:gap-1 sm:ml-3 '>
<div>
<div className='relative'>
<table className="table-auto  border-2">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>COUPLER</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-8 mr-4'>Cost</p>
        <p className='font-bold ml-7  pr-3'>Select</p>

    </div>
  </thead>    
 { display ? svalue.map((data,i)=>
 <tbody>
 <tr className='flex hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-3 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex '>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7 mr-5  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-10 pl-5' type="checkbox"  name="data" item_name={data.item_name} onClick={
       ()=>{
        var flag=0; 
       
       for(var j=0; j<arr.length; j++){
           if(i === Esarr[j]){
            
             for (var k = 0; k < Esarr.length; k++) {
             if (Esarr[k] === i) {
                 Esarr.splice(k, 1);
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
         Esarr.push(i)
         axios.post("/item/itempost",{
           first_inches:data.first_inches,
           item_name:data.item_name,
           mm:data.mm,
           cost:data.cost,
           inches:data.inches,
           sl_no:i+1,
           name:"finolex"
         })
         .then(res=>{
           console.log(res.data);
         })
       }

      
      console.log(Esarr)
        }
      }/>
      
    </tr>
    </tbody> 
 )
 
  : dataCoupler.map((data, i)=>
  
  <tbody className='border-2  '>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-3 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex '>
                            <input className='w-16 border-2 pl-5 ml-2 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7 mr-5  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className=' ml-3 pl-5'   type="checkbox"  name="data" onClick={
      ()=>{
         
         var flag=0; 
       
        for(var j=0; j<arr.length; j++){
            if(i === arr[j]){
             
              for (var k = 0; k < arr.length; k++) {
              if (arr[k] === i) {
                  arr.splice(k, 1);
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
          arr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(arr)
      //  callArr(arr)

      //  setSArr(Oarr=>[...Oarr,arr])
      //  setSArr(arr)
      //  console.log(sarr);
   
      
      }
       
      }/>

    
    </tr>
    </tbody> 
  )
  
 }

 {addItemCoupler ? <div className='flex'>
  <p>COUPLER</p>
  <input className='w-12 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setCouplerInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-12 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setCouplerCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="COUPLER" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:CouplerCost ,
      inches:CouplerInches
    })
    window.location.reload()
  }}>Confirm</button>
  
 </div> :""}
 
  

 
 

 </table>

 <p className='mt-5'></p>
 {addDisplayCoupler ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleAddCoupler}></img></div> 
: ""}
</div>
</div>

<div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>ELBOW</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {dataElbow.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {addItem ? <div className='flex'>
  <p>ELBOW</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setElbowInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setElbowCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="ELBOW" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:elbowCost ,
      inches:elbowInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {addDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleAdd}></img></div> 
: ""}

  </div>


  {/* add table item */}


  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>END CAP</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {endcap.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {addItemEndcap ? <div className='flex'>
  <p>END CAP</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setEndcapInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setEndcapCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="END CAP" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:EndcapCost ,
      inches:EndcapInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {addDisplayEndcap ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleAddEndcap}></img></div> 
: ""}

  </div>

  {/* THE END CAP TABLE */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>THE END CAP</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {theendcap.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
                 var sl_no = i+1;
                 console.log(sl_no)
               axios.delete(`/${data.item_name}/${sl_no}`)
               
               
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {TheaddItemEndcap ? <div className='flex'>
  <p>THE END CAP</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setTheEndcapInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setTheEndcapCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="THE END CAP" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:TheEndcapCost ,
      inches:TheEndcapInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {TheaddDisplayEndcap ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleTheAddEndcap}></img></div> 
: ""}

  </div>

{/* 10KG ELBOW */}


<div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>10KG ELBOW</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {Tkgelbow.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {TkgelbowaddItem ? <div className='flex'>
  <p>10KG ELBOW</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setTkgelbowInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setTkgelbowCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="10KG ELBOW" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:TkgelbowCost ,
      inches:TkgelbowInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {TkgelbowaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleTkgelbow}></img></div> 
: ""}

  </div>

 {/* FTA */}

 <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>FTA</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {FTA.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {FTAaddItem ? <div className='flex'>
  <p>FTA</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setFTAInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setFTACost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="FTA" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:FTACost ,
      inches:FTAInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {FTAaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleFTA}></img></div> 
: ""}

  </div>

  {/* MTA */}
  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>MTA</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {MTA.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {MTAaddItem ? <div className='flex'>
  <p>MTA</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setMTAInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setMTACost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="MTA" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:MTACost ,
      inches:MTAInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {MTAaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleMTA}></img></div> 
: ""}

  </div>

  {/* SERVICE SADDLE */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>SERVICE SADDLE</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {service.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {serviceaddItem ? <div className='flex'>
  <p>SERVICE SADDLE</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setServiceInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setServiceCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="SERVICE SADDLE" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:serviceCost ,
      inches:serviceInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {serviceaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleService}></img></div> 
: ""}

  </div>

  {/* TEE */}
  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>TEE</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {TEE.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {TEEaddItem ? <div className='flex'>
  <p>TEE</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setTEEInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setTEECost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="TEE" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:TEECost ,
      inches:TEEInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {TEEaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleTee}></img></div> 
: ""}

  </div>

  {/* 10KG TEE */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>10KG TEE</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {tgTEE.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
                 var sl_no = i+1;
                 console.log(sl_no)
               axios.delete(`/${data.item_name}/${sl_no}`)
               
               
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {tgTEEaddItem ? <div className='flex'>
  <p>10KG TEE</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    settgTEEInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    settgTEECost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="10KG TEE" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:tgTEECost ,
      inches:tgTEEInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {tgTEEaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handletgTee}></img></div> 
: ""}

  </div>

  {/* TAIL PIECE */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>TAIL PIECE</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {tail.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {tailaddItem ? <div className='flex'>
  <p>TAIL PIECE</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setTailInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setTailCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="TAIL PIECE" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:tailCost ,
      inches:tailInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {tailaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleTail}></img></div> 
: ""}

  </div>

  {/* BALL VALVE */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>BALL VALVE</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {ball.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {balladdItem ? <div className='flex'>
  <p>BALL VALVE</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setBallInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    settgBallCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="BALL VALVE" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:ballCost ,
      inches:ballInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {balladdDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleBall}></img></div> 
: ""}

  </div>

  {/* ELBOW 45 */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>ELBOW 45</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {felbow.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {felbowaddItem ? <div className='flex'>
  <p>ELBOW 45</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setFelbowInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setFelbowCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="ELBOW 45" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:felbowCost ,
      inches:felbowInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {felbowaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleFelbow}></img></div> 
: ""}

  </div>

  {/* THREAD ELBOW */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>THREAD ELBOW</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {telbow.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {telbowaddItem ? <div className='flex'>
  <p>THREAD ELBOW</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setTelbowInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setTelbowCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="THREAD ELBOW" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:telbowCost ,
      inches:telbowInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {telbowaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleTelbow}></img></div> 
: ""}

  </div>

  {/* REDUCER */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>REDUCER</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {reducer.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {reduceraddItem ? <div className='flex'>
  <p>REDUCER</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setReducerInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setReducerCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="REDUCER" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:reducerCost ,
      inches:reducerInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {reduceraddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleReducer}></img></div> 
: ""}

  </div>

  {/* RED BUSH */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>RED BUSH</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {redb.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {redbaddItem ? <div className='flex'>
  <p>RED BUSH</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setRedbInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setRedbCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="RED BUSH" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:redbCost ,
      inches:redbInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {redbaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleRedb}></img></div> 
: ""}

  </div>

  {/* RED TEE */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>RED TEE</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {redt.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {redtaddItem ? <div className='flex'>
  <p>RED TEE</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setRedtInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setRedtCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="RED TEE" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:redtCost ,
      inches:redtInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {redtaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleRedt}></img></div> 
: ""}

  </div>

  {/* RED FTA */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>RED FTA</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {redf.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {redfaddItem ? <div className='flex'>
  <p>RED FTA</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setRedfInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setRedfCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="RED FTA" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:redfCost ,
      inches:redfInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {redfaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleRedf}></img></div> 
: ""}

  </div>

  {/* RED ELBOW */}
  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>RED ELBOW</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {rede.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {redeaddItem ? <div className='flex'>
  <p>RED ELBOW</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setRedeInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setRedeCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="RED ELBOW" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:redeCost ,
      inches:redeInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {redeaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleRede}></img></div> 
: ""}

  </div>

  {/* BRASS FTA */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>BRASS FTA</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {brassf.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {brassfaddItem ? <div className='flex'>
  <p>BRASS FTA</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setBrassfInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setBrassfCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="BRASS FTA" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:brassfCost ,
      inches:brassfInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {brassfaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleBrassf}></img></div> 
: ""}

  </div>

  {/* BRASS TEE */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>BRASS TEE</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {brasst.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {brasstaddItem ? <div className='flex'>
  <p>BRASS TEE</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setBrasstInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setBrasstCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="BRASS TEE" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:brasstCost ,
      inches:brasstInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {brasstaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleBrasst}></img></div> 
: ""}

  </div>

  {/* BRASS ELBOW */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>BRASS ELBOW</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {brasse.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {brasseaddItem ? <div className='flex'>
  <p>BRASS ELBOW</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setBrasseInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setBrasseCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="BRASS ELBOW" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:brasseCost ,
      inches:brasseInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {brasseaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleBrasse}></img></div> 
: ""}

  </div>

  {/* RED MTA */}

  <div className='ml-3 relative '>
<table className="table-auto  border-2 z-10">
<thead>
    <tr className='border-2 bg-slate-400' >
       <th>RED MTA</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
    <div className='bg-slate-200 flex '>
        <p className='font-bold ml-4 mr-4'>Name</p>
        <p className='font-bold ml-8 mr-4'>Inche</p>
        <p className='font-bold ml-12 mr-4'>Cost</p>
        <p className='font-bold ml-6 pr-3'>Select</p>
       
    </div>
  </thead>

  {redm.map((data,i)=>
  <tbody className='border-2'>
  <tr className='flex border hover:bg-slate-300'> 
       <p className='pr-4'>{data.item_name}</p> 
      <td className='inline-flex mr-5 ml-2 w-16'>{data.first_inches}mm{data.inches}<p className='text-xs '>{data.mm}</p></td>
      {num ? <div className='flex ml-1'>
                            <input className='w-16 border-2 pl-5 ml-5 ' name="cost"  placeholder={data.cost}  onChange={(e)=>{
                             setEditcost(e.target.value)
                            }}/>
                            <button name={data.user_id} onClick={handleEntry} className="border-2 ml-2 w-7  bg-sky-400">
                              ok
                            </button></div>:<td className='pl-14 w-36  pr-2' name="cost" value={data.cost}> {data.cost}</td>}
      <input className='ml-6 pl-5' type="checkbox" name="data" item_name={data.item_name} onClick={
        ()=>{
          var flag=0; 
       
        for(var j=0; j<Earr.length; j++){
            if(i === Earr[j]){
             
              for (var k = 0; k < Earr.length; k++) {
              if (Earr[k] === i) {
                  Earr.splice(k, 1);
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
          Earr.push(i)
          axios.post("/item/itempost",{
            first_inches:data.first_inches,
            item_name:data.item_name,
            mm:data.mm,
            cost:data.cost,
            inches:data.inches,
            sl_no:i+1,
            name:"finolex"
          })
          .then(res=>{
            console.log(res.data);
          })
        }

       
       console.log(Earr)
        }
        
        }/>
      
    </tr>
    
    </tbody> 
   
  )
 }
 {redmaddItem ? <div className='flex'>
  <p>RED MTA</p>
  <input className='w-16 border-2 ml-5 pl-1' type="text" placeholder='inches' onChange={(e)=>{
    setRedmInches(e.target.value)
  }} /><p>mm</p>
  <input className='w-16 border-2 ml-5 pl-1' placeholder='cost' onChange={(e)=>{
    setRedmCost(e.target.value)
  }}></input>
  <button className='border-2 ml-3 pl-2 pr-2 bg-green-500' name="RED MTA" onClick={(e)=>{
    axios.post("/edit_itemadd",{
      name:e.target.name,
      cost:redmCost ,
      inches:redmInches
    })
    window.location.reload()
  }}>Confirm</button>
 
 </div> :""}
 

 </table>
 <p className='mt-5'></p>
 {redmaddDisplay ? "" : num ?<div className='absolute left-80  bottom-0 '><img src={add_image} alt="add button " 
 className='w-9 h-9  mt-3  z-0' onClick={handleredm}></img></div> 
: ""}

  </div>



</div>

}


</div>
  )

  
}

export default FinOlex


