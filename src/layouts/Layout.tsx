import Header from "@/components/shared/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <div className='w-full h-screen bg-[#faebee]'>
      <Header/>
      <main className='flex w-full'>
          <Outlet/>
      </main>
    </div>
     </>
  )
}

