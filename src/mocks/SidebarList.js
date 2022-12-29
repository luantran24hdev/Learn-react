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
  },
  {
    icon: <ArticleIcon />,
    text: <ListItemText primary="Articles" />,
  },
  {
    icon: <StyleIcon />,
    text: <ListItemText primary="Tags" />,
  },
  {
    icon: <PermContactCalendarIcon />,
    text: <ListItemText primary="Schedule" />,
  },
  {
    icon: <PagesIcon />,
    text: <ListItemText primary="Pages" />,
  },
  {
    icon: <MmsIcon />,
    text: <ListItemText primary="Media" />,
  },
];

export default SidebarList;
