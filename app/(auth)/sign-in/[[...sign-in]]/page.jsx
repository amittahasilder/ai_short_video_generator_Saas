import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (

    <div className='grid grid-cols-1 md:grid-cols-2  '>
        <div>
           <Image src={'/login.jpg'} alt='login' width={500} height={500} />

            
        </div>

        <div className='flex justify-center items-center h-screen'>
        
          <SignIn/>

        </div>

       
    </div>
  )
}




// import { SignIn } from '@clerk/nextjs'
// import Image from 'next/image'

// export default function Page() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-gradient-to-br from-black via-zinc-900 to-black">

//       {/* LEFT IMAGE SECTION */}
//       <div className="relative hidden md:flex items-center justify-center">
//         <Image
//           src="/login.jpg"
//           alt="Login"
//           fill
//           priority
//           className="object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

//         {/* Text */}
//         <div className="relative z-10 text-white px-10">
//           <h1 className="text-4xl font-bold mb-4">
//             Welcome Back 👋
//           </h1>
//           <p className="text-lg text-gray-300">
//             Sign in to access your dashboard and manage everything in one place.
//           </p>
//         </div>
//       </div>

//       {/* RIGHT SIGN IN SECTION */}
//       <div className="flex items-center justify-center px-6">
//         <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

//           <h2 className="text-2xl font-semibold text-white text-center mb-6">
//             Sign In to Your Account
//           </h2>

//           <SignIn
//             appearance={{
//               elements: {
//                 card: "bg-transparent shadow-none",
//                 headerTitle: "text-white",
//                 headerSubtitle: "text-gray-300",
//                 socialButtonsBlockButton:
//                   "bg-white/10 border border-white/20 text-white hover:bg-white/20",
//                 formFieldInput:
//                   "bg-white/10 border border-white/20 text-white",
//                 footerActionText: "text-gray-300",
//                 footerActionLink: "text-indigo-400 hover:text-indigo-300",
//               },
//             }}
//           />
//         </div>
//       </div>

//     </div>
//   )
// }





// import { SignIn } from "@clerk/nextjs";
// import Image from "next/image";

// export default function Page() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">

//         {/* Left Image Section */}
//         <div className="hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
//           <Image
//             src="/login.jpg"
//             alt="Instagram Login"
//             width={500}
//             height={500}
//             priority
//           />
//         </div>

//         {/* Right Sign In Section */}
//         <div className="p-8 flex flex-col justify-center">
//           <h1 className="text-2xl font-bold text-center mb-6">
//             Sign in to Instagram
//           </h1>

//           <SignIn
//             appearance={{
//               elements: {
//                 card: "shadow-none",
//               },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// import { SignIn } from "@clerk/nextjs";
// import Image from "next/image";

// export default function Page() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      
//       {/* Left Image Section */}
//       <div className="flex items-center justify-center bg-gray-100">
//         <Image
//           src="/login.jpg"
//           alt="login"
//           width={500}
//           height={500}
//           priority
//         />
//       </div>

//       {/* Right Sign In Section */}
//       <div className="flex items-center justify-center">
//         <SignIn />
//       </div>

//     </div>
//   );
// }



// import { SignIn } from "@clerk/nextjs";
// import Image from "next/image";

// export default function Page() {
//   return (
//     <div className="min-h-screen flex">

//       {/* LEFT SIDE IMAGE */}
//       <div className="w-1/2 flex items-center justify-center bg-gray-100">
//         <Image
//           src="/login.jpg"
//           alt="Login Image"
//           width={500}
//           height={500}
//           className="object-contain"
//           priority
//         />
//       </div>

//       {/* RIGHT SIDE LOGIN */}
//       <div className="w-1/2 flex items-center justify-center">
//         <SignIn />
//       </div>

//     </div>
//   );
// }
