import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import PagesIcon from "@mui/icons-material/Pages";
import StyleIcon from "@mui/icons-material/Style";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import MmsIcon from "@mui/icons-material/Mms";
import ListItemText from "@mui/material/ListItemText";
const SidebarList = [
  {
    icon: <PersonIcon />,
    text: <ListItemText primary="All Users" />,
    path: "/users/all",
  },
  {
    icon: <ArticleIcon />,
    text: <ListItemText primary="Articles" />,
    path: "/articles/all",
  },
  {
    icon: <StyleIcon />,
    text: <ListItemText primary="Tags" />,
    path: "/tags/all",
  },
  {
    icon: <PermContactCalendarIcon />,
    text: <ListItemText primary="Schedule" />,
    path: "/schedules/all",
  },
  {
    icon: <PagesIcon />,
    text: <ListItemText primary="Pages" />,
    path: "/pages/all",
  },
  {
    icon: <MmsIcon />,
    text: <ListItemText primary="Media" />,
    path: "/media/all",
  },
];

export default SidebarList;
