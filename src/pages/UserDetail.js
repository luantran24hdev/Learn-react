import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { parseJwt } from "../helpers";
import Textfield from "@atlaskit/textfield";
import styleppp from "../assets/pages/user-detail.css";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { handleEditUser } from "../store/user/action";
const UserDetail = () => {
  const dispath = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const token = useSelector((state) => state.auth.access_token);
  let userObj = parseJwt(token);
  const [email, setEmail] = useState(userObj.email);
  const [password, setPassword] = useState("");
  // console.log("----------userObj", userObj);

  function updateProfile(e) {
    e.preventDefault();
    const user = {
      id: userObj.sub,
      email: email,
      password: password,
    };
    // console.log("-------", user);
    dispath(handleEditUser(user)).then((res) => {
      console.log("----------------", res);
      if (res.ok) {
        alert(res.data);
        history.push("/admin");
      } else {
        console.log(res.error);
      }
    });
    // setEmail(e.target.value);
    // console.log("email", email);
    // console.log("password", password);
  }

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
    }
  }, [location, history, token]);

  return (
    <div className={styleppp}>
      <div className="inner">
        <div className="container">
          <h1 className="title">Edit user: {email}</h1>
          <div className="grid">
            <div className="form-group email-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                autoComplete="off"
                id="email"
                type="text"
              />
            </div>
            <div className="form-group phone-group">
              <label htmlFor="phone">Password</label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                autoComplete="off"
                id="password"
                type="password"
              />
            </div>
          </div>

          <div className="button-container">
            <button className="button" onClick={updateProfile}>
              Update profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
