"use client"

import React, { useState } from "react"
import { Button } from "../../components/ui/button"
import EmptyState from "./_components/EmptyState"

const Dashboard = () => {
  const [videoList, setVideoList] = useState([])

  return (
    <>
      <div className="home flex justify-between items-center">
        <h2>Dashboard</h2>
        <Button>Create New</Button>
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
