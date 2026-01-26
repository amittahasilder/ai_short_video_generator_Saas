import Link from "next/link"
import { Button } from "../../../components/ui/button"
import React from "react"

function EmptyState() {
  return (
    <div className="p-5 border-dotted border-amber-600 py-24 flex flex-col items-center gap-4 ">
     <h2>You Dont have any short video Created </h2>
     <Link href={'/dashboard/create-new'}>


      <Button>Create New Short Video</Button>
      </Link>
    </div>
  )
}

export default EmptyState
