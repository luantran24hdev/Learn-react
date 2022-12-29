import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import styleppp from "../assets/pages/user-detail.css";
import { parseJwt } from "../helpers";
import { handleEditUser } from "../store/user/action";
import Appbar from "../components/Appbar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function UserDetail() {
  const token = useSelector((state) => state.auth.access_token);
  let userObj = parseJwt(token);
  const [email, setEmail] = useState(userObj.email);
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
    }
  }, [location, history, token]);

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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          <div className={styleppp}>
            <div className="inner">
              <div className="container">
                <h1 className="title">Edit user: {email ? email : ""}</h1>
                <div className="list">
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
                  <button
                    style={{ width: "200px" }}
                    className="button"
                    onClick={updateProfile}
                  >
                    Update profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Typography>
      </Box>
    </Box>
  );
}
