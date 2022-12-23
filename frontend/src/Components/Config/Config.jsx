import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Agents from '../../Pages/Agents'
import Calls from '../../Pages/Calls'
import Dashboard from '../../Pages/Dashboard'
import SideBar from '../SideBar/SideBar'

const Config = () => {
  return (
    <div>
        <BrowserRouter>
            <SideBar>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/agents' element={<Agents/>}/>   
                    <Route path='/calls' element={<Calls/>}/>              
                </Routes>
            </SideBar>
        </BrowserRouter>
    </div>
  )
}

export default Config