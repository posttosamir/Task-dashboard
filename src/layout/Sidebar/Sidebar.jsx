import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { ROUTE_CONSTANTS } from "../../constants/route_constants";
import { SIDEBAR_CONSTANTS } from "../../constants/sidebar_constants";
function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="side-nav-wrapper">
        {/* <li>
          <Link to={ROUTE_CONSTANTS.TASK1}>Taks1</Link>
        </li>
        <li>
          <Link to={ROUTE_CONSTANTS.TASK2}>Task 2</Link>
        </li> */}

        {/*---------------------- we can use map here as most of the element is constants --------------------------------
        ----------------------------------------------------------------------------------------------------------------*/}

        {SIDEBAR_CONSTANTS.map((ele) => {
          return (
            <div>
              <li>
                <Link to={ele.LinkPath}>{ele.LinkName}</Link>
              </li>
            </div>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
