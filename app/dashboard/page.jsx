// "use client"

// import React, { useState } from "react"
// import { Button } from "../../components/ui/button"
// import EmptyState from "./_components/EmptyState"
// import CreateNew from './creat-new/page';
// import { Link } from "lucide-react";

// const Dashboard = () => {
//   const [videoList, setVideoList] = useState([])

//   return (
//     <>
//       <div className="home flex justify-between items-center bg-orange-300">
//         <h2>Dashboard</h2>
//              <Link href={'/app/dashboard/creat-new/page.jsx'}>
        
        
//               <Button>+ CreateNew</Button>
//               </Link>
//       </div>

//       {/* Empty state */}
//       {videoList.length === 0 && (
//         <div>
//           <EmptyState />
//         </div>
//       )}
//     </>
//   )
// }

// export default Dashboard


"use client"

import React, { useState } from "react"
import { Button } from "../../components/ui/button"
import EmptyState from "./_components/EmptyState"
import Link from "next/link"

const Dashboard = () => {
  const [videoList, setVideoList] = useState([])

  return (
    <>
      <div className="home flex justify-between items-center bg-orange-300 p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>

        <Link href="/dashboard/creat-new">
          <Button>+ Create New</Button>
        </Link>
      </div>

      {/* Empty state */}
      {videoList.length === 0 && (
        <div>
          <EmptyState />
        </div>
      )}
    </>
  )
}

export default Dashboard
