import React from 'react';
import MainMenu from './MainMenu/MainMenu.js';

const PageTemplate = ({ children }) =>
    <div className="page">
        <MainMenu />
        { children }
    </div>;

export default PageTemplate;
