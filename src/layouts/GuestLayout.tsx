import { Outlet } from "react-router-dom";


export default function GuestLayout() {
  return (
    <>
    <div className='w-full'>
     
      <main className='w-full'>
          <Outlet/>
      </main>
      
    </div>
     </>
  )
}
