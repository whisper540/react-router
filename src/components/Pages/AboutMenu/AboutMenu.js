import React from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
};
const normaldStyle = {
    backgroundColor: "none",
    color: "none"
};

const AboutMenu = ({match}) =>
    <div className="about-menu">
        <li>
            <NavLink to="/about" style={match.path === '/about' ? selectedStyle : normaldStyle}>
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history" activeStyle={selectedStyle}>
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services" activeStyle={selectedStyle}>
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location" activeStyle={selectedStyle}>
                [Location]
            </NavLink>
        </li>
    </div>;

export default AboutMenu;