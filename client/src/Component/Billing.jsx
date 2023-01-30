import React from 'react'
import Navbar from './Navbar'
import {useState, useEffect} from 'react';
import axios from 'axios';
import cross_simple from '../cross.png'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';



function Billing() {
  const [billingData, setBillingData] = useState([]);

  const [change, setChange ] = useState()

  const [ percentage, setPercentage] = useState();
  const [entry, setEntry] = useState()

  const [total, setTotal ] = useState([]);
  const searchInput = React.useRef(null)

  const [displayAdd, setDisplayAdd] = useState(false)

  const [bname, setBname] = useState()
  const [pname, setPname] = useState()
  const [mm, setMM] = useState()
  const [rate, setRate] = useState()
  const [ per, setPer] = useState()
  const [qty, setQty] = useState()


  const handleChange = async(e) =>{
    try{
      const value = e.target.value;
      setChange(value)

    }catch(err){
      console.log(err)
    }
  }

  const handleSubmit = async(e) =>{
    try{
      const unique_id = e.target.name;
      console.log(change)

       axios.post(`/item_post/${change}/${unique_id}`)
       window.location.reload(true)
       billingDataFetch()

    }catch(err){
      console.log(err)
    }
  }

const handlePercenSumbit = async(e)=>{
  try{
    const unique_id = e.target.name;

    axios.post(`/item_percentage/${percentage}/${unique_id}`)
    window.location.reload(true)
    billingDataFetch()
  }catch(err){
    console.log(err)
  }
}
  

  console.log(searchInput.current)

  const handleEntry = async(e) => {
    try{
      const unique_id = e.target.name;
      axios.post(`/update_entry/${entry}/${unique_id}`)
      billingDataFetch()
      window.location.reload(true)
    }catch(err){
      console.log(err)
    }
  }


  

  const billingDataFetch = async () => {
    try{
      const response = await fetch("/item/itempost");
      const data = await response.json();

      const resp = await fetch("/total_cost");
      const resp_data = await resp.json();

      setTotal(resp_data.data.sum)
      
      setBillingData(data.data);
    }catch(err){
      console.log(err);
    }
  }


 

  useEffect(()=>{
    billingDataFetch();

  },[])

  


  

  return (
    <div>
    <Navbar/>
   
     <div className='flex place-content-center'>
    <p className='text-4xl ml-80  mt-10'>SELECTED ITEMS</p>
    <Link to="./checkout">
    <button className=' ml-80 bg-sky-900 text-white lg:mt-10 sm:mt-0 w-32   h-10  border-solid rounded-xl border-4 border-light-blue-500 text-lg  opacity-100 '  >CheckOut</button>
    </Link>
    </div>
    <div className='border-2 ml-2 mr-2 mt-5'>
    <div className='flex'>
    <p className='text-xl font-bold mt-4 ml-6'>SL.NO</p>
    
    <p className=' text-xl font-bold mb-2 mt-4 ml-16'>PRODUCTS</p>
    
    <p className='text-xl font-bold mt-4 ml-36'>LIST RATE</p>
    <p className='text-xl font-bold mt-4 ml-16'>PERCENTAGE</p>
    <p className='text-xl font-bold mt-4 ml-16' >ENTER RATE</p>
    <p className=' text-xl font-bold mb-2 mt-4 ml-16'>QUANTITY</p>
    <p className='  text-xl font-bold mb-2 mt-4 ml-12'>AMOUNT</p>

    </div> 
    <div>
    {
      
      billingData.map((data,i)=>
       
                      
        <div className="flex mt-2 ml-8 ">
                           <div className='ml-4'>{i+1}</div>
                           <div  className='text-lg w-20  ml-20'>
                           {data.item_name}
                           </div>
              
                           <div className='ml-3 w-14' >
                           {data.first_inches}mm
                           </div>
                           <div  className='w-2'>
                           {data.inches}
                           </div>
                           <div className='text-xs w-2 '>
                           {data.mm}
                           </div>

                           <div className='ml-32 w-2'>
                            {data.cost}
                           </div>

                           <div className='flex'>
                            <input className='w-16  border-2 ml-32 ' name={data.unique_id} placeholder={data.percentage*100} onChange={(e)=>{
                               setPercentage(e.target.value)
                            }}></input>
                            <button  name= {data.unique_id} onClick={handlePercenSumbit} className="border-2 ml-2 w-7 bg-sky-400">ok</button>
                           </div>

                           <div className='flex'>
                            <input className='w-16 border-2 ml-20 ' placeholder={data.cost} onChange={(e)=>{
                               setEntry(e.target.value)
                            }}></input>
                             <button name={data.unique_id} onClick={handleEntry} className="border-2 ml-2 w-7 bg-sky-400">
                              ok
                            </button>
                           </div>
                          

                           <div className=' flex'>
                            
                           <input className='ml-20 border-2 w-12' placeholder={data.count}  onChange={handleChange}  ref={searchInput}></input> 
                           <button name={data.unique_id}    onClick={handleSubmit} className="border-2 ml-2 w-7 bg-sky-400">ok</button>

                        <p className='ml-20 w-14'>{data.total_cost}</p>

                        <DeleteIcon  src={cross_simple} name={data.unique_id} onClick={()=>{
                            axios.delete(`/delete_item/${data.unique_id}`)
                            window.location.reload(true)
                        }} className="w-5 h-5 ml-8 " alt='cross_simple'/>
                        

                           </div>
                         
                           
                        </div>

         
      
      )

      
      
    }

    {displayAdd ? <div className='flex mt-2'>
      <input placeholder='brand name' className='w-24 border-2 ml-5' onChange={(e)=>{
        setBname(e.target.value)
      }}></input>
      <input placeholder='product name' className='w-28 border-2 ml-3' onChange={(e)=>{
        setPname(e.target.value)
      }}></input>
      <input placeholder='mm' className='w-16 border-2 ml-3' onChange={(e)=>{
        setMM(e.target.value)
      }}></input>
      <input placeholder='Rate' className='w-16 border-2 ml-28' onChange={(e)=>{
        setRate(e.target.value)
      }}></input>
      <input placeholder='%' className='w-16 border-2 ml-20' onChange={(e)=>{
        setPer((e.target.value)/100)
      }}></input>
      <p placeholder='rate' className='w-16  ml-28'></p>
      <input placeholder='QTY' className='w-16 border-2 ml-28' onChange={(e)=>{
        setQty(e.target.value)
      }}></input>
      <button className='ml-10 bg-sky-900 text-white  w-32   h-10  border-solid rounded-xl border-4 border-light-blue-500 text-lg  opacity-100' onClick={()=>{
         axios.post("/datapost",{
          bname:bname,
          pname:pname,
          mm:mm,
          rate:rate,
          qty:qty,
          per:per
         })
         .then(res=>{
          console.log(res.data)
         })
         setDisplayAdd(false)
         window.location.reload(true)
      }}>Add item</button>
    </div>:
    <div className='flex ml-80 mt-3'>
    <p className='ml-96'></p>
    <button className='ml-80 bg-sky-900 text-white  w-32   h-10  border-solid rounded-xl border-4 border-light-blue-500 text-lg  opacity-100' onClick={()=>{
      setDisplayAdd(true)
    } }>Add Item</button>
    </div>
  }
    <hr className='mt-8 bg-stone-900'/>
    <p className='ml-64'>
    <p className='flex ml-96 mt-2'>
    
    <label className='ml-96 '>Total cost:</label>
    <p className='ml-4'>{total}</p>
    </p>
    </p>
    </div>

    </div>

    Billing
    </div>
  )
}

export default Billing