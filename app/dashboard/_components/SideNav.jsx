import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
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
            id:3,
            name:'Upgrade',
            path:'/upgrade',
            icon:ShieldPlus
        },
           {
            id:4,
            name:'Account',
            path:'/account',
            icon:CircleUser
        }
    ]
  return (
    <div className='bg-emerald-50 h-full w-64 h-screen shadow-orange-400'>
      <div className='grid  gap-2 '>
        {MenuOption.map((item,index)=> (
            <Link href={item.path} key={index}>
          <div className='   flex items-center grid  gap-2 hover:bg-primary hover:text-white rounded-b-md cursor-pointer'>
           <item.icon/>
            <h2>{item.name}</h2>
          </div>
          </Link>
    ))}
      </div>
    </div>
  )
}

export default SideNav
