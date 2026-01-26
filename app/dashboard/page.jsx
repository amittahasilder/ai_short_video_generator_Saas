"use client"

import React, { useState } from "react"
import { Button } from "../../components/ui/button"
import EmptyState from "./_components/EmptyState"

const Dashboard = () => {
  const [videoList, setVideoList] = useState([])

  return (
    <>
      <div className="home flex justify-between items-center bg-orange-300">
        <h2>Dashboard</h2>
             <Link href={'/create-new'}>
        
        
              <Button>Create New Short Video</Button>
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
