import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import BookmarkIcon from "@material-ui/icons/Bookmark";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_top">
          <img
            src="https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-relay.png"
            alt=""
          />
          <div className="sidebartop_content">
            <Avatar />
            <h2>Sanjog Piya</h2>
            <h4>sanjogpiya6@gmail.com</h4>
          </div>
        </div>
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className="sidebar_statNumber">2,000</p>
          </div>
          <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="sidebar_statNumber">4,000</p>
          </div>
        </div>
        <div className="sidebar_connection">
          <div className="connection_left">
            <p>Connections</p>
            <p>Grow Your Network</p>
          </div>
          <PersonAddIcon />
        </div>
        <div className="sidebar_connection">
          <div className="connection_left">
            <p>Access exclusive tools & insights</p>
            <p>Try Premium for free</p>
          </div>
        </div>
        <div className="sidebar_connection">
          <div className="connection_left items_mine">
            <BookmarkIcon className="bookmark_icon" />
            <p>My Items</p>
          </div>
        </div>
      </div>
      asdasd
    </div>
  );
}

export default Sidebar;
