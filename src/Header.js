import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import TextsmsIcon from "@material-ui/icons/Textsms";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_logo">
          <img src="https://www.authormedia.com/wp-content/uploads/LinkedIn.gif"></img>
        </div>
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={TextsmsIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsActiveIcon} title="Notifications" />
        <HeaderOptions
          avatar="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/104258993_3093894067361852_3846022178290580398_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=l15mYLEb-GYAX-Vwjy8&_nc_ht=scontent.fktm10-1.fna&oh=e7b384ac876dfe54a9fd5df7b78dbf47&oe=60EE620E"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
