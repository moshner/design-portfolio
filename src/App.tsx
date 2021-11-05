import React from 'react';
import ProjectOverviewCard from './components/project-overview-card';
// eslint-disable-next-line import/no-unassigned-import
import './App.css';
import logo from './monogram.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import type { VFC } from 'react';

const App: VFC = () => (
    <Router>
        <header className="site-header">
            <Link to="/">
                <img src={logo} alt="NM" className="site-header__logo" />
            </Link>
            <nav>
                <Link to="/">Projects</Link>
                {' '}
                |
                {' '}
                <Link to="/project1">Resume</Link>
                {' '}
                |
                {' '}
                <a href="https://nick.mosher.me">About Nick</a>
            </nav>
        </header>
        <Switch>
            <Route path="/" exact>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ut soluta aperiam obcaecati sed aspernatur odio eveniet
                    odit hic nemo ipsa. Eligendi magnam ex optio veritatis nam
                    veniam expedita suscipit facilis.
                </div>
                <div>
                    <ProjectOverviewCard
                        name="Project Name"
                        link="//google.com"
                        linkText="google"
                        imgAlt="A cute kitten"
                        imgSrc="//placekitten.com/1600/900"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa perspiciatis quod in facilis aut, voluptate laudantium aperiam consectetur saepe, corrupti, iure commodi id dignissimos ullam eaque alias illum rerum."
                    />
                    <ProjectOverviewCard
                        name="Project Name"
                        link="//google.com"
                        linkText="google"
                        imgAlt="A cute kitten"
                        imgSrc="//placekitten.com/800/601"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa perspiciatis quod in facilis aut, voluptate laudantium aperiam consectetur saepe, corrupti, iure commodi id dignissimos ullam eaque alias illum rerum."
                    />
                </div>
            </Route>
        </Switch>
        <footer />
    </Router>
);

export default App;
