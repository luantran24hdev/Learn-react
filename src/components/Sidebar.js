import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import { useHistory, Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import SidebarList from "../mocks/SidebarList";

import IconButton from "@mui/material/IconButton";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function SidebarComp({ toggleOpen, handleDrawerClose }) {
  console.log("open", toggleOpen);
  const arrSidebar = SidebarList;
  const theme = useTheme();
  const history = useHistory();
  function redirectAdmin() {
    history.push("/users/all");
  }
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
  return (
    <div>
      <Drawer variant="permanent" open={true}>
        <DrawerHeader>
          <Link
            to="/users/all"
            onClick={redirectAdmin}
            style={{ cursor: "pointer", width: "80%", margin: "0 auto" }}
          >
            <img
              src="https://uploads-ssl.webflow.com/62bc7c02137f111d28762311/637b3cd92913f97e1154dbae_Logo%20Black.svg"
              alt=""
            />
          </Link>
          {/* <IconButton
            onClick={() => {
              handleDrawerClose(false);
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton> */}
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
        >
          {arrSidebar.map((item, i) => (
            <Link
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
              to={item.path}
              key={i}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.text}
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
