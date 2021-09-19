import React from "react";
import "./Body.css";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import TextsmsIcon from "@material-ui/icons/Textsms";
import { Avatar, IconButton } from "@material-ui/core";

export default function Body() {
  return (
    <div className="bodypart">
      <div className="topmost_bars">
        <div className="search">
          <input type="text" placeholder="Search dashboard" />
        </div>
        <div className="other_uis">
          <IconButton>
            <HomeIcon className="grayicon" />
          </IconButton>
          <IconButton>
            <SupervisorAccountIcon className="grayicon" />
          </IconButton>
          <IconButton>
            <BusinessCenterIcon className="grayicon" />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon className="grayicon" />
          </IconButton>
          <IconButton>
            <TextsmsIcon className="grayicon" />
          </IconButton>
          <IconButton>
            <Avatar src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/104258993_3093894067361852_3846022178290580398_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ISVf2CKM2QQAX_A0_jU&_nc_ht=scontent.fktm10-1.fna&oh=26dcbac6a53b7024c5a2c20c344c9da4&oe=616CF20E" />
          </IconButton>
        </div>
      </div>

      <div className="totalstaffwithchart">
        <div className="totalstaff">
          <div className="total_staff_title">
            <h4>Total Number of Staff</h4>
          </div>
          <div className="total_staff_number">
            <h2>500</h2>
          </div>
        </div>
        <div className="fulltimepart">
          <div className="mr-2">
            <div className="fulltimetitle">
              <h4>Full Time</h4>
            </div>
            <div className="fulltimenumber">
              <h4>400</h4>
            </div>
          </div>
          <div>
            <div className="fulltimetitle">
              <h4>Part Time</h4>
            </div>
            <div className="fulltimenumber">
              <h4>400</h4>
            </div>
          </div>
        </div>
        <div className="chartpie">
          <div className="fulltimetitle">
            <h4>
              Composition <span>by country</span>
            </h4>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/45%25_pie_chart.svg/1024px-45%25_pie_chart.svg.png"></img>
        </div>
      </div>

      <div className="staff_list">
        <div className="fulltimetitle">
          <h4>Staff List</h4>
        </div>

        <div className="stafflists">
          <div className="staff_online"></div>

          <div className="dflex">
            <div className="staff_avatar">
              <Avatar src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/104258993_3093894067361852_3846022178290580398_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ISVf2CKM2QQAX_A0_jU&_nc_ht=scontent.fktm10-1.fna&oh=26dcbac6a53b7024c5a2c20c344c9da4&oe=616CF20E" />
            </div>
            <div className="staff_name">
              <h4>Johnny Doee</h4>
            </div>
            <div className="staff_email">
              <h4>emailaddress.com</h4>
            </div>
            <div className="staff_number">
              <h4>9840011001</h4>
            </div>
          </div>
        </div>

        <div className="stafflists">
          <div className="staff_online"></div>

          <div className="dflex">
            <div className="staff_avatar">
              <Avatar src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/104258993_3093894067361852_3846022178290580398_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ISVf2CKM2QQAX_A0_jU&_nc_ht=scontent.fktm10-1.fna&oh=26dcbac6a53b7024c5a2c20c344c9da4&oe=616CF20E" />
            </div>
            <div className="staff_name">
              <h4>Johnny Doee</h4>
            </div>
            <div className="staff_email">
              <h4>emailaddress.com</h4>
            </div>
            <div className="staff_number">
              <h4>9840011001</h4>
            </div>
          </div>
        </div>

        <div className="stafflists">
          <div className="staff_online"></div>

          <div className="dflex">
            <div className="staff_avatar">
              <Avatar src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/104258993_3093894067361852_3846022178290580398_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ISVf2CKM2QQAX_A0_jU&_nc_ht=scontent.fktm10-1.fna&oh=26dcbac6a53b7024c5a2c20c344c9da4&oe=616CF20E" />
            </div>
            <div className="staff_name">
              <h4>Johnny Doee</h4>
            </div>
            <div className="staff_email">
              <h4>emailaddress.com</h4>
            </div>
            <div className="staff_number">
              <h4>9840011001</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
