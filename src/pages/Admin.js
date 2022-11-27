import React from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Admin = () => {

  const location = useLocation();
  const history = useHistory();
  const token = useSelector((state) => state.auth.access_token);
  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
    }
  }, [location, history, token]);
  
  return (
    <div>Admin</div>
  )
}

export default Admin