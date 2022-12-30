import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Appbar from "../../components/Appbar";

//page
import UserTable from "../../components/UserTable/UserTable";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function UserList() {
  // dispacth actions and passing res to UserTable
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          <UserTable></UserTable>
        </Typography>
      </Box>
    </Box>
  );
}
