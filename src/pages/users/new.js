import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styleProfileUser from "../../assets/pages/user-detail.css";
import { parseJwt } from "../../helpers";
import { handleNewUser } from "../../store/user/action";

export default function UserNew() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispath = useDispatch();
  function updateProfile(e) {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    // console.log("-------", user);
    dispath(handleNewUser(user)).then((res) => {
      console.log("----------------", res);
      if (res.ok) {
        alert(res.data);
        history.push("/dashboard/users/all");
      } else {
        console.log(res.error);
      }
    });
    // setEmail(e.target.value);
    // console.log("email", email);
    // console.log("password", password);
  }

  return (
    <div className={styleProfileUser}>
      <div className="inner">
        <div className="container">
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
              style={{ width: "100px" }}
              className="button"
              onClick={updateProfile}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
