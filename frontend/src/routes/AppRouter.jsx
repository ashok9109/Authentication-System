import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../Layouts/AuthLayout'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import HomeLayout from '../Layouts/HomeLayout'
import Dashboard from '../pages/Dashboard'
import MyCourses from '../pages/MyCourses'
import MyInternship from '../pages/MyInternship'


const AppRouter = () => {
    const router = createBrowserRouter([
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
                        // {
                        //     path: '',
                        //     element: <Dashboard/>
                        // },
                        // {
                        //     path:'/mycoures',
                        //     element:<MyCourses/>
                        // },
                        // {
                        //     path:'/myinternship',
                        //     element:<MyInternship/>
                        // }
                    ]
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
};

export default AppRouter;