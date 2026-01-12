import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (

    <div>
        <div>
           <Image src={'/public/login.jpg'} alt='login' width={500} height={500} />
        </div>

        <div>
        
        <SignIn/>

        </div>
    </div>
  )
}