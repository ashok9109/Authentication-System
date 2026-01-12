import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../Layouts/AuthLayout'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import HomeLayout from '../Layouts/HomeLayout'
import HomePage from '../pages/HomePage'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'


const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path: '/',
            element: <AuthLayout />
        },
        {
            path: '/home',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '',
                    element: <HomeLayout />,
                    children: [
                        {
                            path: '',
                            element: <HomePage />
                        }
                    ]
                }
            ]
        }
    ])

    return <RouterProvider router={router}/>
};

export default AppRouter;