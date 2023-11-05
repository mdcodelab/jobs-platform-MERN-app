import React from 'react';
import {links} from "../../utils/Links";
import {NavLink} from "react-router-dom";
import { useAppContext } from '../../context/appContext';

function Navlinks() {
    const {toggleSidebar}=useAppContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const {id, path, text, icon}=link
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span> {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navlinks;
