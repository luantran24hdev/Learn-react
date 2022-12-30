import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserTable from "../../components/UserTable/UserTable";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { getAllUser } from "../../store/user/action";
export default function UsersList() {
  const dispatch = useDispatch();
  const [pagesize] = useState(0);
  const [currPage, setCurrPage] = useState(0);
  const listAllUser = useSelector(
    (state) => state.User.listAllUser.dataListUser
  );
  console.log("-----------listAllUser oginrnal", listAllUser);
  useEffect(() => {
    const payload = {
      pageOffset: currPage,
      pageSize: pagesize,
      query: "",
    };
    dispatch(getAllUser(payload)).then((res) => {
      // if (res.ok && res.data.length === 0) {
      // }
      // console.log("-------res", res);
    });
  }, [dispatch, currPage, pagesize]);
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <Stack spacing={2} direction="row">
          <Button variant="outlined">Create new user</Button>
        </Stack>
      </div>

      <UserTable listAllUser={listAllUser}>{listAllUser}</UserTable>
    </div>
  );
}
