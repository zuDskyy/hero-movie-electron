import React from 'react'
import { Outlet } from 'react-router-dom'
import MainLayout from '../../layout/MainLayout'


const Home = () => {
  
  return (
    <div>
    
       <MainLayout>
        <Outlet/>
       </MainLayout>
      
    </div>
  )
}

export default Home
