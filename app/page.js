import { UserButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";
// import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
   <div>
    
  <h2>Subscribr to Tubeguruji</h2>

  <Button variant="destructive">Subscribe this </Button>
 

 <UserButton/>
     
   </div>
  );
}


