import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { parseJwt } from "../helpers";

import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const UserDetail = () => {
  const dispath = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const token = useSelector((state) => state.auth.access_token);
  let userObj = parseJwt(token);
  console.log("----------userObj", userObj);

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
    }
  }, [location, history, token]);

  return (
    <div className="container">
      <h1>Edit User :sssss</h1>
    </div>
  );
};

export default UserDetail;
