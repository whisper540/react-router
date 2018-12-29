import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PageTemplate from './PageTemplate.js';
import { Company, History, Services, Location } from './aboutPages/aboutPages.js';

const Home = () =>
    <PageTemplate>
        <section className="home">
            <h1>[Company Website]</h1>
            {/* <nav>
                <Link to="/">[home]</Link>
                <Link to="about">[About]</Link>
                <Link to="events">[Events]</Link>
                <Link to="products">[Products]</Link>
                <Link to="contact">[Contact Us]</Link>
                <Link to="test">[Page404!]</Link>
            </nav> */}
        </section>
    </PageTemplate>;

const About = ({ match }) =>
    <PageTemplate>
        <section className="about">
            <Switch>
                <Route exact path="/about" component={Company}/>
                <Route path="/about/history" component={History}/>
                <Route path="/about/services" component={Services}/>
                <Route path="/about/location" component={Location}/>
            </Switch>
        </section>
    </PageTemplate>;

const Events = () =>
    <PageTemplate>
        <section className="events">
            <h1>[Events Calendar]</h1>
        </section>
    </PageTemplate>;

const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[Products Catalog]</h1>
        </section>
    </PageTemplate>;

const Contact = ({match,history}) =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
            <div>
                <Link to="/contact/detail/god">[/contact/detail/"god"]</Link>
                <div>
                    <button onClick={() => history.push(`/contact/detail/${540}`)}>/contact/detail/540</button>
                </div>
            </div>
            <div>
                <Route path="/contact/detail/:id" component={ContactDetail}/>
            </div>
        </section>
    </PageTemplate>;

const Whoops404 = ({ location }) =>
    <PageTemplate>
        <div className="whoops-404">
            <h1>Resource not found at '{location.pathname}'</h1>
            <Link to="/">[Back to Home]</Link>
        </div>
    </PageTemplate>;

const ContactDetail = ({match}) =>
{
    console.log(match);
    return (
        <div>{match.params.id}</div>
)};


export { Home, About, Events, Products, Contact, Whoops404 };




