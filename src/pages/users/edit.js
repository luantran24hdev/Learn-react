import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styleProfileUser from "../../assets/pages/user-detail.css";
import { parseJwt } from "../../helpers";
import { handleEditUser } from "../../store/user/action";
import { handleDeleteUser } from "../../store/user/action";
import { fetchUserById } from "../../store/user/action";

export default function UserDetail() {
  const token = useSelector((state) => state.auth.access_token);
  const currentUser = useSelector((state) => state.User.currentUser);
  let userObj = parseJwt(token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const params = useParams();

  console.log("000000", params);

  useEffect(() => {
    const dataParam = {
      id: params.user_id,
    };
    dispath(fetchUserById(dataParam));
  }, [location, dispath]);

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
      // dispath(fetchUserById(dataParam));
      setEmail(currentUser ? currentUser.email : null);
    }
  }, [location, history, token, currentUser, params, dispath]);

  function updateProfile(e) {
    e.preventDefault();
    const user = {
      id: currentUser.id,
      email: email,
      password: password,
    };
    dispath(handleEditUser(user)).then((res) => {
      if (res.ok) {
        alert(res.data);
        history.push("/dashboard/users/all");
      } else {
        console.log(res.error);
      }
    });
  }

  function DeleteUser(e) {
    e.preventDefault();
    const user = {
      id: params,
    };
    dispath(handleDeleteUser(user)).then((res) => {
      if (res.ok) {
        alert(res.data);
        history.push("/dashboard/users/all");
      } else {
        console.log(res.error);
      }
    });
  }

  return (
    <div className={styleProfileUser}>
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
          <div className="button-container">
            <button
              style={{ width: "200px" }}
              className="button-warning"
              color="secondary"
              onClick={DeleteUser}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
