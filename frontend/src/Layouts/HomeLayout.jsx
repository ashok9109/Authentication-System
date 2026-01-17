import React from 'react'
import { Outlet } from 'react-router';
import NavLink from '../components/Navigation/NavLink';

const HomeLayout = () => {
  return (
    <>
      <section className='h-screen w-screen flex' >
        {/* Nav link */}
        <aside className='w-[30%] bg-[#102A43]' >
          <NavLink />
        </aside>


        {/* This is right page */}
        <div className='w-full' >
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default HomeLayout;