import React, { useState } from 'react'
import Billing from './Billing'
import Home from './Home'
import FinOlex from './FinOlex'
import SignIn from './SignIn'
import CheckOut from './CheckOut'
import History from './History'
import Other from './Other'
import PVC from './PVC'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"




function App() {


  

  return (
    <Router>
    <div>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/billing"  element={<Billing/>}/>
    <Route exact path="/Finolex" element={<FinOlex/>}/>
    <Route exact path="/Finolex/billing" element={<Billing/>}/>
    <Route exact path="/Finolex/signin" element = {<SignIn/>}/>
    <Route exact path = "/Finolex/:email" element = {<FinOlex/>}/>
    <Route exact path = "/Finolex/:email/billing" element = {<Billing/>}/>
    <Route exact path = "/Finolex/:email/signin" element = {<SignIn/>}/>
    <Route exact path= "/checkout" element = {<CheckOut/>}/>
    <Route exact path = "/Finolex/:email/billing/checkout" element = {<CheckOut/>}/>
    <Route exact path="/Finolex/billing/checkout" element={<CheckOut/>}/>
    <Route exact path="/billing/checkout" element={<CheckOut/>}/>
    <Route exact path="/History" element={<History/>}/>
    <Route exact path="/other" element={<Other/>} />
    <Route exact path="/PVC" element={<PVC/>} />
    

    </Routes>
    </div>
    </Router>
  )
}

export default App