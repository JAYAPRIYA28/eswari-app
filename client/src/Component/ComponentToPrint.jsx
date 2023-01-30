import React, { useEffect, useState } from 'react'

function ComponentToPrint() {
   

  const [data, setData] = useState([])
  const [total, setTotal ] = useState([]);
  const [ word, setWord] =useState()
  const [qty, setQty] = useState([])
  const [item, setItem] = useState([])
  const [ date, setDate] = useState()

  // console.log(date)

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
  return (
    <div>
   
    
    <div>
      <p className='text-4xl   mt-10 text-center'>QUOTATION</p>
    </div>
   
    <div className='ml-96 flex'>
    <p className='ml-56'></p>
       <p className='ml-96'>Date : {date}</p>
    </div>
    <div className=" ml-20 mr-20 border-2 mt-4">
    <hr className='bg-stone-900 '/>
    <div className='flex'>

    <p className='text-xl font-bold mt-4 ml-6'>SL.NO</p>
    <div className='text-stone-900 border ml-6 mr-2 h-14'></div>
    
    <p className=' text-xl font-bold mb-2 mt-4 ml-14 mr-28'>Description</p>
    <div className='text-stone-900 border ml-96 mr-6 h-14'></div>
    
    <p className='text-xl font-bold mt-4 '>Qty</p>
    <div className='text-stone-900 border ml-10  h-14'></div>
    <p className='text-xl font-bold mt-4 ml-6'>Rate</p>
    <div className='text-stone-900 border ml-8  h-14'></div>
    <p className='text-xl font-bold mt-4 ml-4' >Value</p>

   


    </div> 
    <hr/>
     <div>
     
      {data.map((data,i)=>
      <div className='flex'>
        <p className='ml-12'>{i+1}</p>
        <div className='text-stone-900 border ml-12 h-9'></div>
        <p className='ml-16 flex w-80 mr-11'>{data.item_name}<p className='ml-1'>{data.first_inches}mm </p>{data.inches}<p className='text-xs w-2 mr-4 '>{data.mm}</p>
        (<p>{data.name}</p>)
        </p>
        <div className='text-stone-900 border ml-60 mr-6 h-9'></div>
        <p className='ml-3 mr-1 '>{data.count}</p>
        <div className='text-stone-900 border ml-12  h-9'></div>
        <p className='ml-8 w-9'>{data.cost}</p>
        <div className='text-stone-900 border ml-8  h-9'></div>
        <p className='ml-6'>{data.total_cost}</p>
        </div>
      )}
      <hr className='bg-stone-900 mt-5 h-1'/>
      <div className='ml-10 flex mt-3'>
      <p className='flex text-xl'>Rs. {word} </p>
      <p className='ml-40  text-lg '>Total Item / Qty : {item}/{qty}</p>
      <p className='ml-60 text-xl'>Total : </p>
      <p className=' ml-10 mb-2 text-xl'>{total}</p>
     
      </div>
      
     </div>
    
    </div>
    <hr className='bg-stone-900'/>
  
    CheckOut</div>
  )
}

export default ComponentToPrint