import React from 'react'
import { useState, useEffect } from 'react';
import logo from '../Eswari_pipe_logo.png'



// import {Link} from "react-router-dom";


function Navbar() {

  const [fittingDisplay, setFittingDisplay] = useState(false);
  const [pipesDisplay, setPipeDisplay] = useState(false);
 
   var a = false;
   console.log(window.innerWidth)
   if(window.innerWidth === 1020 && a=== false){
    window.location.reload(false)
   }
   
  
   if(window.innerWidth <= 1020){
    
     a = false;
   }else{
   
    a = true;
   }

  

   const handleDisplay = (e) => {
    setDisplay(!display)
   }

  useEffect(()=>{
    handleDisplay()
    
  },[])

   const [display, setDisplay ] = useState(a)
  return (
    <div >
    <nav class="flex items-center justify-between flex-wrap bg-green-700   p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img alt="eswari logo" src={logo} className="w-24 h-24"></img>
      <span class="font-semibold text-xl tracking-tight font-serif">ESWARI PVC PIPE</span>
    </div>

    <div class="block lg:hidden">
      <button onClick={handleDisplay} className="flex items-center px-3 sm: py-2 border rounded text-teal-200 text-white hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:mr-3">
      <div class="text-sm lg:flex-grow right-0">
      </div>
         
        {display ? "" : 
        <div>
        <button className=" peer flex md:flex  lg:bg-green-700 sm:bg-green-800 md:bg-green-800 lg:rounded-none sm:rounded-md lg:pt-0 sm:pt-1 sm:pb-1 lg:pb-0 sm:pl-3 lg:pl-0  block mt-4 lg:inline-block lg:flex lg:mt-0 text-white  lg:hover:text-green-600 " onClick={
          (e)=>{
           setFittingDisplay(!fittingDisplay)
           console.log(fittingDisplay)
          }
        } id="fitting">
      
          FITTINGS
          
           <p className='lg:ml-0 sm:ml-60 lg:mr-0'></p>
          <svg xmlns="http://www.w3.org/2000/svg" className=" text-white lg:mt-2 hover:text-green-600 sm:ml-96 lg:ml-0  h-4 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
          
        </button>
        

         {fittingDisplay ?    
        <div className='hidden lg:ml-20 sm:ml-0   peer-hover:flex peer-hover:mt-0 hover:flex
         flex-col ' for="fitting">
           <ul className="lg:absolute ">
            <a href="http://localhost:3000/Finolex">
              <li className='lg:px-7 sm:px-5  lg:py-3 sm:py-5  lg:border-none sm:hover:border lg:hover:bg-gray-200  lg:bg-white sm:bg-green-700 lg:text-black sm:text-white drop-shadow-lg' >
              FinOlex
              </li>
            </a>
            <a href="http://localhost:3000/other">
              <li className='lg:px-7 sm:px-5  lg:py-3 sm:py-5 lg:border-none sm:hover:border lg:hover:bg-gray-200  lg:bg-white sm:bg-green-700 lg:text-black sm:text-white  drop-shadow-lg'>
               Other
              </li>
              </a>
           </ul>

        </div>
         : ""}
        </div>
        }
        {display ? "" :
        <div>
        <button className="block peer lg:flex sm:flex   lg:bg-green-700 sm:bg-green-800 lg:rounded-none sm:rounded-md lg:pt-0 sm:pt-1 sm:pb-1 lg:pb-0 sm:pl-2 lg:pl-0  lg:inline-block lg:mt-2 sm:mt-1 lg:ml-28 sm:ml-0 text-white lg:hover:text-green-600 "
         onClick={(e)=>{
          setPipeDisplay(!pipesDisplay)
         }} id="pipes">
          PIPES
          <p className='lg:ml-0 sm:ml-80  sm:mr-4 lg:mr-0'></p>
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white mt-2 hover:text-green-600  lg:ml-0 sm:ml-80 h-4 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
        </button>
        {pipesDisplay ? 
        <div className='hidden lg:ml-44  peer-hover:flex peer-hover:mt-0  hover:flex
         flex-col ' for="pipes">
           <ul className="lg:absolute ">
             <a href="http://localhost:3000/PVC">
              <li className='lg:px-8 sm:px-5  lg:py-3 sm:py-5  lg:border-none sm:hover:border lg:hover:bg-gray-200  lg:bg-white sm:bg-green-700 lg:text-black sm:text-white drop-shadow-lg' >
              PVC
              </li>
              </a>
              <li className='lg:px-7 sm:px-5  lg:py-3 sm:py-5 lg:border-none sm:hover:border lg:hover:bg-gray-200  lg:bg-white sm:bg-green-700 lg:text-black sm:text-white  drop-shadow-lg'>
               Finolex
              </li>
              
           </ul>

        </div>
        : ""}
        </div>

        }
        
        {display ? "" :
        
        <a href="/history" className="block sm:mt-2  lg:inline-block lg:ml-32 lg:mt-0 text-white lg:hover:text-green-600  lg:mr-28">
         History
        </a>
        } 
        
      
     
      
    </div>

    {display ? "" :
 
    <a href='http://localhost:3000/billing' className='lg:mr-16 text-white pl-3 pt-1  sm:mt-3 lg:mt-0  border-zinc-300 w-20 h-10 border-2 hover:text-green-900 rounded-lg bg-green-800  text-lg' >
        Billing
       </a> 
       

    }
   

  </nav>
   
  
    </div>
  )
}



export default Navbar