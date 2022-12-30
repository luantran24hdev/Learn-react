import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TopHeader from "../components/TopHeader";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import SidebarComp from "../components/Sidebar";
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
export default function Appbar() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = (value) => {
    // the callback. Use a better name
    console.log("value", value);
    setOpen(value);
  };

  return (
    <div>
      <AppBar
        style={{ background: "white", boxShadow: "none" }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon style={{ color: "gray" }} />
          </IconButton>
          <div style={{ position: "absolute", right: "0" }}>
            <TopHeader></TopHeader>
          </div>
        </Toolbar>
      </AppBar>
      <SidebarComp
        toggleOpen={open}
        handleDrawerClose={handleDrawerClose}
      ></SidebarComp>
    </div>
  );
}
