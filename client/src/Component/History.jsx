import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function History() {
  const [ data, setData] = useState([]);

  console.log(data)
  const HistoryData = async() => {
    try{
      const response = await fetch("/historyget")
      const responseData = await response.json();

      setData(responseData.data)
    }catch(err){
       console.log(err);
    }
  }

  useEffect( ()=> {
    HistoryData();
  },[])

  return (

    <div>
    <Navbar/>
    <div>
      <p className='text-4xl   mt-10 text-center'>History</p>
    </div>
    <div className=" ml-10  mr-10  border-2 mt-4">
     <div className='flex'>
     <p className='text-xl font-bold mt-4 ml-6'>Name</p>
     <div className='text-stone-900 border ml-32 mr-2 h-14'></div>
     <p className=' text-xl font-bold mb-2 mt-4 ml-14 mr-28'>Product</p>
     <div className='text-stone-900 border ml-60 mr-6 h-14'></div>
     <p className='text-xl font-bold mt-4 '>Qty</p>
     <div className='text-stone-900 border ml-10  h-14'></div>
    <p className='text-xl font-bold mt-4 ml-6'>Rate</p>
    <div className='text-stone-900 border ml-8  h-14'></div>
    <p className='text-xl font-bold mt-4 ml-4 ' >Date</p>


     </div>

      <hr/>
      <div>
        {
          data.map((data)=> 
          <div>
          <div className='flex'>
          <p className='ml-4 w-48'>{data.user_name}</p>
          <div className='text-stone-900 border  h-9'></div>
           <p className='w-96 mr-2'>{data.item_name}</p>
           <div className='text-stone-900 border ml-24 mr-6 h-9'></div>
           <p className='ml-3  '>{data.qty}</p>
           <div className='text-stone-900 border ml-14  h-9'></div>
           <p className='ml-8 w-9'>{data.cost}</p>
           <div className='text-stone-900 border ml-7  h-9'></div>
           <p className='ml-6 text-blue-700'>{data.time}</p>
           
          </div>
          <hr/>
          </div>
          
          )
        }
      </div>

    </div>
    History</div>
  )
}

export default History