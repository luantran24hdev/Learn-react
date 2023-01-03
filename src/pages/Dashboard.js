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
import Loading from "../components/Loading";
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
  const isLoading = useSelector((state) => state.loading.isLoading);
  // dispacth actions and passing res to UserTable
  const location = useLocation();
  const history = useHistory();
  const token = useSelector((state) => state.auth.access_token);

  const isRenderHeader = () => {
    let arrRouter = ["/", "/login", "/register"];
    let routerName = location.pathname;
    console.log("routerName", routerName);
    // if (arrRouter.indexOf((route) => routerName.includes(route))) return false;
    if (arrRouter.indexOf(routerName) !== -1) return false;
    return true;
  };
  // const isNotPrivate = () => {
  //   let arrRouter = ["/", "/register"];
  //   let routerName = location.pathname;
  //   if (arrRouter.some((route) => routerName.includes(route))) return true;
  //   return false;
  // };
  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
      // history.push("/login");
    }
  }, [history, token]);
  console.log("------------", isRenderHeader());
  return (
    <Box sx={{ display: "flex" }}>
      {isRenderHeader() && <CssBaseline />}
      {isRenderHeader() && <Appbar />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          <AppRoutes />
        </Typography>
      </Box>
      <Loading isLoading={isLoading} />
    </Box>
  );
}
