import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import React from 'react'

const SideNav = () => {
    const MenuOption=[
        {
            id:1,
            name:'Dashboard',
            path:'/dashboard',
            icon:PanelsTopLeft
        },
           {
            id:2,
            name:'Creat New',
            path:'/create-new',
            icon:FileVideo
        },   {
            id:1,
            name:'Upgrade',
            path:'/upgrade',
            icon:ShieldPlus
        },
           {
            id:1,
            name:'Account',
            path:'/account',
            icon:CircleUser
        }
    ]
  return (
    <div className='bg-emerald-400 h-full w-64 h-screen shadow-orange-400'>
      side nav
    </div>
  )
}

export default SideNav
