import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../store/user/action";
import { useHistory, Link } from "react-router-dom";
import UserTable from "../../components/UserTable/UserTable";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function UsersList() {
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
            <TextField label="Filter Email" id="fullWidth" />
          </Stack>
        </div>
      </div>

      <UserTable></UserTable>
    </div>
  );
}
