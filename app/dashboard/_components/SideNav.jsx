
// "use client"
// import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React from 'react'

// const SideNav = () => {
//     const MenuOption=[
//         {
//             id:1,
//             name:'Dashboard',
//             path:'/dashboard',
//             icon:PanelsTopLeft
//         },
//            {
//             id:2,
//             name:'Creat New',
//             path:'/create-new',
//             icon:FileVideo
//         },   {
//             id:3,
//             name:'Upgrade',
//             path:'/upgrade',
//             icon:ShieldPlus
//         },
//            {
//             id:4,
//             name:'Account',
//             path:'/account',
//             icon:CircleUser
//         }
//     ]

//     const path =usePathname()
//   return (
//     <div className='bg-emerald-50 h-full w-64 h-screen shadow-orange-400'>
//       <div className='grid  gap-2 '>
//         {MenuOption.map((item,index)=> (
//             <Link href={item.path} key={index}>
//           <div className=` flex items-center grid  gap-2 hover:bg-primary hover:text-white rounded-b-md cursor-pointer 
//           ${path==item.path&& 'bg-primary text-white'}`>
//            <item.icon/>
//             <h2>{item.name}</h2>
//           </div>
//           </Link>
//     ))}
//       </div>
//     </div>
//   )
// }

// export default SideNav


"use client"

import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {

  const MenuOption = [
    { id: 1, name: 'Dashboard', path: '/dashboard', icon: PanelsTopLeft },
    { id: 2, name: 'Create New', path: '/create-new', icon: FileVideo },
    { id: 3, name: 'Upgrade', path: '/upgrade', icon: ShieldPlus },
    { id: 4, name: 'Account', path: '/account', icon: CircleUser },
  ]

  const path = usePathname()

  return (
    <div className="bg-emerald-50 w-64 h-screen shadow-lg">
      <div className="flex flex-col gap-2 p-4">
        {MenuOption.map((item) => {
          const Icon = item.icon
          return (
            <Link href={item.path} key={item.id}>
              <div
                className={`flex items-center gap-3 p-3 rounded-md cursor-pointer
                hover:bg-primary hover:text-white
                ${path === item.path ? 'bg-primary text-white' : ''}`}
              >
                <Icon className="w-5 h-5" />
                <h2 className="text-sm font-medium">{item.name}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SideNav
