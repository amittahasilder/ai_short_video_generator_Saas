import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

const DashboardLayout = ({ children }) => {
  return (
    <div>
        <div className='hidden  md:block '>
            <SideNav/>
        </div>
    <div>
        <Header/>
    { children }
    </div>
    </div>
  )
}

export default DashboardLayout
