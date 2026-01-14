import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';

const ProtectedRoute = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // ==========================================
  // create Protected route useing navigate
  // ===========================================

  useEffect(() => {
    if (user) {
      navigate("/home")
    } else {
      navigate("/")
    }
  }, [user], [dispatch])

  return <Outlet />
}

export default ProtectedRoute;