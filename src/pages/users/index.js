import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../store/user/action";
import { useHistory, Link } from "react-router-dom";
import UserTable from "../../components/UserTable/UserTable";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function UsersList() {
  const [pagesize] = useState(100);
  const [currPage, setCurrPage] = useState(0);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const searchQuery = (event) => {
    console.log(event.key);

    if (event.key === "Enter") {
      event.preventDefault();

      console.log("User pressed Enter ✅", email);
      const payload = {
        pageOffset: currPage,
        pageSize: pagesize,
        query: {
          email: email,
        },
      };
      dispatch(getAllUser(payload)).then((res) => {
        // if (res.ok && res.data.length === 0) {
        // }
        // console.log("-------res", res);
      });
    }
  };
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Stack spacing={2} direction="row">
            <Link to="/dashboard/users/new">
              <Button variant="outlined">Create new user</Button>
            </Link>
          </Stack>
          <Stack spacing={1} direction="row">
            <TextField
              label="Search"
              placeholder="Fill email..."
              size="small"
              type="text"
              id="outlined-size-small"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onKeyDown={searchQuery}
            />
          </Stack>
        </div>
      </div>

      <UserTable></UserTable>
    </div>
  );
}
