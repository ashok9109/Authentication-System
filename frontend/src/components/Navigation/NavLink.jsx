import { Album, BookCheck, Home, Icon, icons } from "lucide-react";
import { NavLink as RouterNavLink, useLocation, useNavigate, } from "react-router";
import { useDispatch } from 'react-redux';
import { logoutApi } from '../../features/actions/authactions';
import logo from '../../images/hd-logo.png';


// ===================
// Nav link 
// ===================
const navlink = [
  { label: "Dashboard", icon: Home, to: "/home" },
  { label: "My Courses", icons: BookCheck, to: "/home/my-courses" },
  { label: "My Internship", icons: Album, to: "/home/my-internship" }
]

const NavLink = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();


  // ============================
  // Logout handler for logout
  // =============================
  const logouthandler = async () => {
    try {
      const response = dispatch(logoutApi());
      navigate("/")
      if (response) {
        console.log("user is logout")
      }
    } catch (error) {
      throw error.response?.data || error
    }
  }


  return (
    <>
      <section className=' p-10 flex flex-col items-center justify-center  ' >
        <div className='h-[70px] w-[200px] mb-5' >
          <img src={logo} alt="company logo" />
        </div>

        <div className='flex flex-col items-center justify-center gap-10 text-2xl font-bold text-black' >
          {navlink.map(({ label, icon: Icon, to }, Idx) => {
            return (
              <RouterNavLink
                key={label}
                to={to}
              >
                <div className='flex' >
                  {/* <Icon /> */}
                  <span>{label}</span>
                </div>
              </RouterNavLink>
            )
          })}
        </div>

        <div className="text-center mt-10" >
          <button onClick={logouthandler} className='text-red-500 text-3xl' >Logout</button>
        </div>
      </section>
    </>
  )
}

export default NavLink;