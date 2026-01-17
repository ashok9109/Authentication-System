import React from 'react'
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <>
    <section>
    <aside>
    </aside>

    <div>
      <Outlet/>
    </div>
    </section>
    </>
  )
}

export default HomeLayout;