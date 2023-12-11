import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SikoSocial</span>
        </Link>
        <HomeOutlinedIcon />
        <WbSunnyOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}
