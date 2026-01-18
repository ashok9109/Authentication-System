import { Outlet } from 'react-router';
import NavLink from '../components/Navigation/NavLink';

const HomeLayout = () => {
  return (
    <>
      <section className='h-screen w-screen flex' >
        {/* Nav link */}
        <aside className='w-[25%] bg-slate-900 ' >
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