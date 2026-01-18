import { Album, BookCheck, Home, Icon } from "lucide-react";
import { NavLink as RouterNavLink, useLocation, useNavigate, } from "react-router";
import { useDispatch } from 'react-redux';
import logo from '../../images/hd-logo.png';
import { removeUser } from "../../features/reducers/authSlice";
import { axiosintance } from "../../config/axiosintance";


// ===================
// Nav link 
// ===================
const navlink = [
  { label: "Dashboard", icon: Home, to: "/home" },
  { label: "My Courses", icon: BookCheck, to: "/home/my-courses" },
  { label: "My Internship", icon: Album, to: "/home/my-internship" }
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
      const response = await axiosintance.get("/api/auth/logout");
      navigate("/")
      if (response) {
        console.log("user is logout")
        dispatch(removeUser());
      }
    } catch (error) {
      throw error.response?.data || error
    }
  }

  return (
    <>
      {/* Navigation Section */}
      <section className='h-full w-full p-10 flex flex-col items-center space-y-5 ' >

        {/* company logo */}
        <div className='h-[70px] w-[200px] mb-5' >
          <img src={logo} alt="company logo" />
        </div>

        {/* Nav map */}
        <div className='flex flex-col items-start justify-center gap-10 text-xl font-bold text-[#05AFF1]' >
          {navlink.map(({ label, icon: Icon, to }, Idx) => {
            return (
              <RouterNavLink
                key={label}
                to={to}
              >
                <div className='flex gap-2' >
                  <Icon />
                  <span>{label}</span>
                </div>
              </RouterNavLink>
            )
          })}
        </div>

        {/* logout button */}
        <div className="text-center mt-10" >
          <button onClick={logouthandler} className='text-red-500 text-2xl' >Logout</button>
        </div>
      </section>
    </>
  )
}

export default NavLink;