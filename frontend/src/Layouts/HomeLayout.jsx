import React from 'react'
import { Outlet } from 'react-router';
import NavLink from '../components/Navigation/NavLink';

const HomeLayout = () => {
  return (
    <>
      <section>
        {/* Nav link */}
        <aside>
          <NavLink />
        </aside>


        {/* This is right page */}
        <div>
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default HomeLayout;