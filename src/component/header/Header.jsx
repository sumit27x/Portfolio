import React, { useState } from "react";
import './Header.css';
import Logo from '../../assets/Profile/logo.png';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import BoltIcon from '@mui/icons-material/Bolt';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

const Header =()=>{
    const [Toggle ,showMenu] = useState(false);

    return (
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav_logo">
            <img src={Logo} alt="" className="logo" width="180px"/>
          </a>
          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link active-link">
                  <div className="nav_icon">
                    <HomeOutlinedIcon />
                  </div>
                  Home
                </a>
              </li>

              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <div className="nav_icon">
                    <PersonOutlineIcon />
                  </div>
                  About
                </a>
              </li>

              <li className="nav_item">
                <a href="#skill" className="nav_link">
                  <div className="nav_icon">
                    <ManageAccountsOutlinedIcon />
                  </div>
                  Skill
                </a>
              </li>

             {/* <li className="nav_item">
                <a href="service" className="nav_link">
                  <div className="nav_icon">
                    <SettingsOutlinedIcon />
                  </div>
                  Service
                </a>
              </li> */}

              <li className="nav_item">
                <a href="#project" className="nav_link">
                  <div className="nav_icon">
                    <BusinessCenterOutlinedIcon />
                  </div>
                  Project
                </a>
              </li>

              <li className="nav_item">
                <a href="#contact" className="nav_link">
                <div className="nav_icon">
                  <SendOutlinedIcon />
                  </div>
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav_close" onClick={()=>showMenu(!Toggle)}>
              <CloseOutlinedIcon />
            </div>
          </div>
          
          <div className="nav_toggle" onClick={()=>showMenu(!Toggle)}>
            <WidgetsOutlinedIcon />
          </div>
        </nav>
      </header>
    );
}
export default Header;
