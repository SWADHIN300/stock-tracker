import Header from "@/components/ui/Header"
import { ReactNode } from "react"

const layout = ({children}:{
    children : ReactNode
}) => {
  return (
    <main className="min-h-screen text-grey-400">
         <Header/>
       <div className="container py-10">
          {children}
       </div>
    </main>
  )
}

export default layout
