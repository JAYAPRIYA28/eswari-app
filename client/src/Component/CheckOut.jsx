import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import  { useReactToPrint } from "react-to-print";
import axios from 'axios';



function CheckOut() {
 
  

  const [data, setData] = useState([])
  const [total, setTotal ] = useState([]);
  const [ word, setWord] =useState()
  const [qty, setQty] = useState([])
  const [item, setItem] = useState([])
  const [ date, setDate] = useState()

  const [ arr, setArr] = useState([])
  const [userName, setUserName] = useState()




  console.log(arr)


  var converter = require('number-to-words');
  const current = new Date();
 


  const billingDataFetch = async() => {
    try{
     const response = await fetch("http://localhost:3002/item/itempost")
     const responseData = await response.json();
     setData(responseData.data) 
     const resp = await fetch("http://localhost:3002/total_cost");
     const resp_data = await resp.json();
     setWord(converter.toWords(resp_data.data.sum))
     setTotal(resp_data.data.sum)
     setQty(resp_data.dataQTY.sum)
     setItem(resp_data.dataItem.count)
      

 
     setDate(current.getDate() +"/"+ (current.getMonth()+1)+"/"+ current.getFullYear())
    }catch(err){
      console.log(err)
    }
  }
  
//  console.log(data)

useEffect(()=>{
  billingDataFetch();

},[])
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'customer-bill',
    onAfterPrint: () => alert('print success')
  });

  const handleData = async(e) => {
    try{
      data.map(data => {
        setArr(arr.push([data.item_name ,data.first_inches,data.inches, data.mm, data.name]))
        
      })
      console.log(arr)
          axios.post("http://localhost:3002/history", {
            qty:qty,
            cost:total,
            date:date,
            arr:arr,
            user_name:userName
          })
          .then(res=> {
            console.log(res.data)
          })
         
           axios.delete("http://localhost:3002/historyDelete")
          
    }catch(err){
      console.log(err)
    }
  }

//  var sectionStyle = {

//   backgroundImage: `url(${logo})`,
//     height: '100vh',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover'
    
//   }
  return (
    <div >
    <Navbar/>
    
    <div  ref = {componentRef}   style={{ size:"A4", margin:0}}>
    {/* <div style={sectionStyle}> */}
    <div className='border-2 ml-20 print:ml-1 mr-20 print:mr-1 mt-5'>
      <p className='text-4xl font-bold   mt-10 text-center'>QUOTATION</p>
   
   
    <div className=' flex'>
    {/* <div className='ml-10'>
     <p className='text-xl font-bold ' >Eswari PVC pipe</p>
     <p className='text-lg'>Mettur main road,</p>
     <p className='text-lg'>Pachampalayam(PO),</p>
     <p className='text-lg'>Anthiyur(TK),</p>
     <p className='text-lg'>Erode(DT)-638314</p>
    </div> */}
    <label className='ml-5 mt-2 w-40 text-lg'>Customer Name:</label>
    <input className='w-40 h-10 ml-2 border-2 print:border-0' onChange={(e)=>{setUserName(e.target.value)}}></input>
    <p className='ml-40 print:ml-40'></p>
       <p className='ml-96 print:ml-28 pt-5 text-xl'>Date : {date}</p>
    </div>
    
    <div className="  print:ml-0  print:mr-0 border-2 mt-4">

    <hr className='bg-stone-900 '/>
    <div className='flex'>

    <p className='text-xl font-bold mt-4 ml-6'>SL.NO</p>
    <div className='text-stone-900 border ml-6 mr-2 h-14'></div>
    
    <p className=' text-xl font-bold mb-2 mt-4 ml-14 print:ml-12 mr-28 print:mr-20'>Description</p>
    <div className='text-stone-900 border ml-96 print:ml-80 mr-6  h-14'></div>
    
    <p className='text-xl font-bold mt-4 '>Qty</p>
    <div className='text-stone-900 border ml-10 print:ml-9  h-14'></div>
    <p className='text-xl font-bold mt-4 ml-6 print:ml-4'>Rate</p>
    <div className='text-stone-900 border ml-8 print:ml-6 h-14'></div>
    <p className='text-xl font-bold mt-4 ml-4 ' >Value</p>

   


    </div> 
    <hr/>
     <div>
     
      {data.map((data,i)=>
      
      <div className='flex'>
        <p className='ml-12 text-lg'>{i+1}</p>
        <div className='text-stone-900 border ml-12 h-9'></div>
        <p className='ml-16 flex text-lg w-80 print:w-96 mr-20 print:mr-1'>{data.item_name}<p className='ml-1 w-14'>{data.first_inches}mm </p><p className='w-3'>{data.inches}</p><p className='text-xs w-2 mr-4 '>{data.mm}</p>
        (<p className='w-14'>{data.name}</p>)
        </p>
        <div className='text-stone-900 border ml-60 print:ml-56 mr-6  h-9'></div>
        <p className='ml-3  mr-1  text-lg  '>{data.count}</p>
        <div className='text-stone-900 border ml-12 print:ml-10 h-9'></div>
        <p className='ml-8 w-12 text-lg'>{data.cost}</p>
        <div className='text-stone-900 border ml-8  h-9'></div>
        <p className='ml-6 w-12 text-lg'>{data.total_cost}</p>
        </div>
        
      )}
      <hr className='bg-stone-900 mt-5 h-1'/>
      <div className='ml-10 flex mt-3'>
      <p className='flex text-xl font-bold'>Rs. {word} </p>
      <p className='ml-40 print:ml-20 text-lg  '>Total Item / Qty : {item}/{qty}</p>
      <p className='ml-60 print:ml-60 text-xl '>Total : </p>
      <p className=' ml-10  print:ml-10 mb-2 text-xl font-bold'>{total}</p>
     
      </div>
      </div>
     </div>
     {/* </div> */}
     </div>
    
    </div>
    <hr className='bg-stone-900'/>
    <div className=' flex'> 
    <p className='ml-96 mr-40'></p>
    <button className='font-bold ml-96  bg-sky-900 text-white lg:mt-4 sm:mt-0 w-32   h-10  border-solid rounded-xl border-4 border-light-blue-500 text-lg  opacity-100 ' onClick={()=>{handlePrint(); handleData();}}>Print</button>
    </div>
   </div>
  )
}

export default CheckOut