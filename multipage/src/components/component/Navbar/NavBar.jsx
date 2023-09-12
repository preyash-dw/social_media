import React from "react";
import "./NavBar.scss";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GridViewIcon from "@mui/icons-material/GridView";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/Mail';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkMode";
import { AuthContext } from "../../../context/Authorization";
const NavBar = () => {

  const {toggle,darkMode}=useContext(DarkModeContext);
  const {currentUser}=useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social</span>
        </Link>
        <HomeIcon />
        {darkMode ? <WbSunnyIcon onClick={toggle}></WbSunnyIcon>:<DarkModeIcon onClick={toggle} />}
        <GridViewIcon />
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineIcon/>
        <NotificationsNoneIcon/>
        <MailIcon/>
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
