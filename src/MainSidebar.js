import React from "react";
import "./MainSidebar.css";
import BookmarkIcon from "@material-ui/icons/Bookmark";

function MainSidebar() {
  return (
    <div className="bluesidebar">
      <div className="sidebarlogo">
        <h4> LOGO </h4>
      </div>

      <div className="sidebar_list">
        <div className="sidebar_list1">
          <BookmarkIcon className="iconz" />
          <div className="sidebar_list1main">
            <h4>Dashboard</h4>
            <ul>
              <li>
                <a className="active">Staff</a>
              </li>
              <li>
                <a>Staff</a>
              </li>
              <li>
                <a>Staff</a>
              </li>
              <li>
                <a>Staff</a>
              </li>
              <li>
                <a>Staff</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_list1">
          <BookmarkIcon />
          <div className="sidebar_list1main">
            <h4>Access Control</h4>
          </div>
        </div>
        <div className="sidebar_list1">
          <BookmarkIcon />
          <div className="sidebar_list1main">
            <h4>Messages</h4>
          </div>
        </div>
        <div className="sidebar_list1">
          <BookmarkIcon />
          <div className="sidebar_list1main">
            <h4>Student Data</h4>
          </div>
        </div>
        <div className="sidebar_list1">
          <BookmarkIcon />
          <div className="sidebar_list1main">
            <h4>Councilor</h4>
          </div>
        </div>
        <div className="sidebar_list1">
          <BookmarkIcon />
          <div className="sidebar_list1main">
            <h4>Settings</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSidebar;
