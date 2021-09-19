import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_title" src={avatar} />}
      <p>{title}</p>
    </div>
  );
}

export default HeaderOptions;
