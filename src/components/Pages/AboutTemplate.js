import React from 'react';
import AboutMenu from './AboutMenu/AboutMenu.js';

const AboutTemplate = ({ children, match}) =>
    <div className="about-pages">
        <AboutMenu match={match}/>
        { children }
    </div>;

export default AboutTemplate;