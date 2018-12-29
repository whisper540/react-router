import React from 'react';
import AboutTemplate from '../AboutTemplate.js';

const Company = ({match}) =>
    <AboutTemplate match={match}>
        Company...detail...
    </AboutTemplate>;

const History = ({match}) =>
    <AboutTemplate match={match}>
        History...detail...
    </AboutTemplate>;

const Services = ({match}) =>
    <AboutTemplate match={match}>
        Services...detail...
    </AboutTemplate>;

const Location = ({match}) =>
    <AboutTemplate match={match}>
        Location...detail...
    </AboutTemplate>;

export { Company, History, Services, Location };
