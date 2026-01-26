import { Button } from "../../../components/ui/button"
import React from "react"

function EmptyState() {
  return (
    <div className="p-5 border-dotted border-amber-600 py-24 flex flex-col items-center gap-4 ">
      <div>You don’t have any short video created</div>
      <Button>Create New Short Video</Button>
    </div>
  )
}

export default EmptyState
