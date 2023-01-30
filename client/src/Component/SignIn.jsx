import React from 'react'
import Navbar from './Navbar'
import image from "../person-male.png";
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';

import axios from 'axios';

function SignIn() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
 
  

  const navigate = useNavigate()
  
  var path;

  var flag=0 ;
  

  // if (element === email){
  //   path = `/Finolex/${email}`
  //   flag = 0;
    
  // }else if(element !== email){
  //   path = "/Finolex/signin"
  //   flag = 2;
   
  // } 


  const signinData = async ()=>{
    try{
    
      axios.get(`/signin/${email}/${password}`)
           .then(res =>{
            if(res.data.data!==undefined){
              if(email === res.data.data.email ){
                navigate(`/Finolex/${email}`)
              }
            }
              else  {
                alert("Incorrect password and email")
              } 
           })
    


   
  //  console.log(data.data.rows[0].email)
    // setReelement(element[0])
    }catch(err){
      console.log("Error",err)
      alert("Incorrect password and email")
    }
  }

console.log(flag)
// if(flag === 2){
//   <Alert/>
// }


console.log(path)

console.log(email)
console.log(password)




  
  return (
    <div>
    <Navbar/>
    
     
     <div className="lg:self-center sm:align-middle">
     <img src={image} alt="person" className="   text-center ml-auto mr-auto lg:mt-2 sm:mt-60 lg:pt-3 sm:pt-16 lg:pb-3 sm:pb-16 lg:pl-3 sm:pl-16 lg:pr-3 sm:pr-16 rounded-full shadow-2xl"/>
     <h1 className=" lg:text-4xl sm:text-8xl font-serif bl-96 mt-6 text-blue-900 lg:mt-4 sm:mt-10  mb-300 max-w-4xl lg:ml-44 sm:ml-12 text-center  ">Sign In</h1>
     <section className="shadow-2xl lg:ml-72 sm:ml-44  lg:mr-60 sm:mr-28">
     <div className="lg:mt-2 sm:mt-10">
     <label className="lg:text-2xl sm:text-5xl ml-32 pr-2" >Email:</label>
     <input className="lg:mt-12 sm:mt-20 ml-14 pr-16 lm:pl-1 sm:pl-6  lg:pb-2 sm:pb-4  pt-2 border-2 border-black-600" onChange={(e)=> {
        setEmail(e.target.value)
     }} name="email" type="email"></input><br />
     <label className="lg:text-2xl sm:text-5xl ml-32 pr-4">Password:</label>
     <input className="lg:mt-12 sm:mt-20 pr-16 lm:pl-1 sm:pl-6  lg:pb-2 sm:pb-4  pt-2 border-2 border-black-600" name="password"  onChange={(e)=>{
        setPassword(e.target.value)
     }} type="password"></input><br/>
     <Link to={path}>
     <button className="font-bold bg-black text-white  lg:mt-8 sm:mt-10 lg:w-24 sm:w-40 sm:h-20 lg:ml-96 sm:ml-48 lg:h-14 text-center border-solid rounded-xl border-4 border-light-blue-500 lg:text-xl sm:text-4xl opacity-100" onClick={signinData} >sign In</button>
     </Link>
     </div>
     
     </section>
     </div>
    
    </div>
  )
}

export default SignIn