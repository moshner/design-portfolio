import React from 'react';
import ProjectOverviewCard from './components/project-overview-card';
// eslint-disable-next-line import/no-unassigned-import
import './App.css';
import logo from './monogram.svg';
import logoDark from './monogram-dark.svg';
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
                <picture>
                    <source
                        srcSet={logoDark}
                        media="(prefers-color-scheme: dark"
                    />
                    <img src={logo} alt="NM" className="site-header__logo" />
                </picture>
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
                    <h1>About Me</h1>
                    <p>
                        Hi, my name is
                        {' '}
                        <b>Nick Mosher</b>
                        {' '}
                        . I&apos;m a
                        {' '}
                        <b>Senior User Experience</b>
                        {' '}
                        designer, futurist, innovator, husband, and father. This
                        is a small sample of my work as a design, researcher, and
                        innovator. Let me know if you have any questions:
                        {' '}
                        <a href="mailto:nick@mosher.me">nick@mosher.me</a>
                        {''}
                        .
                    </p>
                </div>
                <div>
                    <h1>Projects</h1>
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
        <footer className="site-footer">
            <p>
                <a href="mailto:nick@mosher.me">nick@mosher.me</a>
                <br />
                <a href="tel:785-813-1246">785-813-1246</a>
                <br />
            </p>
            <p>
                Made with React |
                {' '}
                <a href="https://github.com/moshner/design-portfolio">github repo</a>
            </p>
        </footer>
    </Router>
);

export default App;
