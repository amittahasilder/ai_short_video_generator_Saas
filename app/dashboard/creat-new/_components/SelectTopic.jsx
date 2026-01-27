// "use client"

// import React from "react"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// function SelectTopic() {

//   const options = [
//     "Custom Prompt",
//     "Random AI Story",
//     "Scary Story",
//     "Motivational Video",
//     "Tech Explained",
//     "History Facts",
//   ]

//   return (
//     <div className="border py-5 border-amber-500 shadow-2xl">
//       <h2 className="font-bold text-2xl text-primary m-2">Content</h2>

//       <p className="text-gray-500 m-2">
//         What is the topic of your video?
//       </p>

//       <Select>
//         <SelectTrigger className="w-[180px]">
//           <SelectValue placeholder="Theme" />
//         </SelectTrigger>

//         <SelectContent>
//           {options.map((item) => (
//             <SelectItem key={item} value={item.toLowerCase().replace(/\s/g, "-")}>
//               {item}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   )
// }

// export default SelectTopic


// "use client"

// import React, { useState } from "react"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// function SelectTopic() {
//   const [topic, setTopic] = useState("")

//   const options = [
//     "Custom Prompt",
//     "Random AI Story",
//     "Scary Story",
//     "Motivational Video",
//     "Tech Explained",
//     "History Facts",
//   ]

//   return (
//     <div className="border py-5 border-amber-500 shadow-2xl rounded-xl">
//       <h2 className="font-bold text-2xl text-primary m-2">Content</h2>

//       <p className="text-gray-500 m-2">
//         What is the topic of your video?
//       </p>

//       <Select value={topic} onValueChange={setTopic}>
//         <SelectTrigger className="w-[250px] m-2">
//           <SelectValue placeholder="Select a theme" />
//         </SelectTrigger>

//         <SelectContent>
//           {options.map((item) => (
//             <SelectItem
//               key={item}
//               value={item.toLowerCase().replace(/\s+/g, "-")}
//             >
//               {item}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>

//       {topic && (
//         <p className="m-2 text-sm text-green-600">
//           Selected topic: <span className="font-semibold">{topic}</span>
//         </p>
//       )}
//     </div>
//   )
// }

// export default SelectTopic



"use client"

import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function SelectTopic() {
  const options = [
    "Custom Prompt",
    "Random AI Story",
    "Scary Story",
    "Motivational Video",
    "Tech Explained",
    "History Facts",
  ]

  return (
    <div>
      <h2 className="font-bold text-2xl text-primary">Content</h2>
      <p className="text-gray-500">What is the topic of your video?</p>

      <Select>
        <SelectTrigger className="w-[170px]">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>

        <SelectContent>
          {options.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectTopic
