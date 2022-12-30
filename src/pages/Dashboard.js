import React, { useEffect } from "react";
import { AppRoutes } from "../AppRouters";
import { Redirect, Route } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Appbar from "../components/Appbar";

//page
import UserTable from "../components/UserTable/UserTable";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Dashboard() {
  // dispacth actions and passing res to UserTable
  const location = useLocation();
  const history = useHistory();
  const token = useSelector((state) => state.auth.access_token);
  useEffect(() => {
    if (!token) {
      return <Redirect to="/login" />;
    } else {
      return <Redirect to="/dashboard/users/all" />;
    }
  }, [location, history, token]);

  const isRenderHeader = () => {
    let arrRouter = ["/login", "/register"];
    let routerName = location.pathname;
    if (arrRouter.some((route) => routerName.includes(route))) return false;
    return true;
  };
  console.log("------------", isRenderHeader());
  return (
    <Box sx={{ display: "flex" }}>
      {isRenderHeader() && <CssBaseline />}
      {/* <CssBaseline /> */}
      {/* <Appbar /> */}
      {isRenderHeader() && <Appbar />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          <AppRoutes />
        </Typography>
      </Box>
    </Box>
  );
}
