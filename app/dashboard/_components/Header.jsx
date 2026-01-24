// "use client";


// import Image from "next/image";
// import { UserButton } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <div className="flex items-center justify-between p-4">
//       {/* Left Side */}
//       <div className="flex items-center gap-4">
//         <h2 className="text-xl font-semibold">
//           Subscribe to Tubeguruji
//         </h2>
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-3">
//         <Button>Dashboard</Button>
//         <UserButton />
//       </div>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex items-center justify-between p-4 border-b">

      {/* Left Side */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={40}
          height={40}
        />
        <h2 className="text-xl font-bold">
            Ai short Video Generator
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition">
          Dashboard
        </button>

        <UserButton afterSignOutUrl="/" />
      </div>

    </div>
  );
}
