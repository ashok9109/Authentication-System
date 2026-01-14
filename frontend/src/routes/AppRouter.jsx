import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../Layouts/AuthLayout'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import HomeLayout from '../Layouts/HomeLayout'
import HomePage from '../pages/HomePage'


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