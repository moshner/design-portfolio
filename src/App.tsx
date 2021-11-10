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
import type {VFC} from 'react';

const App: VFC = () => (
    <Router>
        <header className="site-header">
            <Link to="/" className="site-header__logo-link">
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
        <div className="site-content">
            <Switch>
                <Route path="/" exact>
                    <div className="overview">
                        <div className="overview__intro">
                            <h1>Portfolio</h1>
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
                            <p>
                                Every project has unique needs. Sometimes a product is fully
                                fleshed out and needs a minor tweak. Sometimes we need to
                                solve a harry problem. Sometimes we need to step back and
                                think about where the product is going in the next 30 years.
                            </p>
                            <p>
                                This portfolio will highlight each stage of the design process.
                                I hope to introduce you to my thoughts on each stage as well
                                as provide an example artifact from each stage.
                            </p>
                        </div>
                        <nav className="overview__toc">
                            <h3>Table of Contents</h3>
                            <ol>
                                <li><a href="#design-futures">Design Futures</a></li>
                                <li><a href="#customer-interviews">Customer Interviews</a></li>
                                <li><a href="#personas">Personas</a></li>
                                <li><a href="#workflow">Workflow</a></li>
                                <li><a href="#card-sorts">Card Sorts</a></li>
                                <li><a href="#ia">Information Architecture</a></li>
                                <li><a href="#tree-testing">Tree Testing</a></li>
                                <li><a href="#wireframes">Wireframes</a></li>
                                <li><a href="#usability1">Usability Testing (round 1)</a></li>
                                <li><a href="#design-sprints">Design Sprints</a></li>
                                <li><a href="#visual-design">Visual Design</a></li>
                                <li><a href="#usability2">Usability Testing (round 2)</a></li>
                                <li><a href="#specs">Development Specs</a></li>
                                <li><a href="#usability3">Usability Testing (round 3)</a></li>
                                <li><a href="#support">Design Support</a></li>
                                <li><a href="#benchmark">Benchmark Usability Testing</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="projects">
                        <h1 className="stages">
                            Stages of Design
                        </h1>
                        <ProjectOverviewCard
                            time="30 Years"
                            name="Design Futures"
                            slug="design-futures"
                            link="/design-futures"
                            linkText="More Futures Work"
                            imgAlt="Image map of the Draw out Consequences technique"
                            imgSrc="./static/ECL-Themes.png"
                        >
                            <div>
                                <h3>30 Years Ahead</h3>
                                <p>
                                    Futures thinking provides a framework to imagine possible
                                    futures. Workshop techniques help the business and design
                                    teams determine:
                                </p>
                                <ol>
                                    <li>What are the possible futures for your business unit?</li>
                                    <li>What is the idea future you want to drivetowards?</li>
                                    <li>What would a roadmap towards that future look like?</li>
                                </ol>
                                <p>
                                    These workshops focus addressing this volitile,
                                    uncertain, complex, and ambigous world that we
                                    live in. Using Bob Joahansens framework of
                                    foresight &gt; insight &gt; action I can help
                                    the business gain vision, understanding,
                                    clarity, and agility
                                </p>
                                <p>
                                    The image is a map of possible consquences to
                                    our scenario we wrote on day 6 of the workshop.
                                    In &quote;Draw Out consquences&quote; the team
                                    works to identify impacts of decisions and actions
                                    that others may take in response to a scenario.
                                    This technique chains if-then statements to form
                                    a more complex scenario.
                                </p>
                                <p>
                                    There are sixteen (16) total techniques in my
                                    future thinking toolbox meant to drive foresight
                                    into insight into action.
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="1 Month"
                            name="Customer Interviews"
                            slug="customer-interviews"
                            link="/customer-interviews"
                            linkText="More Interview Action"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>1 Month Before Development</h3>
                                <p>
                                    Interviews are a vital part of understanding your customers.
                                    You can either perform basic interviews, exploritory interviews,
                                    or contextual intervies. I have significant experience with
                                    basic and exploritory interviews.
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="1 Month"
                            name="Personas"
                            slug="personas"
                            link="/personas"
                            linkText="More About Personas"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>1 Month Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="3 Weeks"
                            name="Workflow"
                            slug="workflow"
                            link="/workflow"
                            linkText="More Workflow"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>3 weeks Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="3 Weeks"
                            name="Card Sorts"
                            slug="card-sorts"
                            link="/card-sorts"
                            linkText="More Card Sorting"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>3 weeks Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="2 Weeks"
                            name="Information Architecture (I.A.)"
                            slug="ia"
                            link="/ia"
                            linkText="More I.A."
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>3 weeks Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="2 Weeks"
                            name="Tree Testing"
                            slug="tree-testing"
                            link="/tree-testing"
                            linkText="More Tree Testing"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>3 weeks Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="2 Weeks"
                            name="Wireframes"
                            slug="wireframes"
                            link="/wireframes"
                            linkText="More Wireframes"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>2 weeks Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="2 Weeks"
                            name="Usability Testing (round 1)"
                            slug="usability1"
                            link="/usabilty"
                            linkText="More Usability Testing"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>2 weeks Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="2 Weeks"
                            name="Design Sprints"
                            slug="design-sprints"
                            link="/design-sprints"
                            linkText="More Design Sprint Examples"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>1-2 weeks Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="2 Weeks"
                            name="Visual Design"
                            slug="visual-design"
                            link="/visual-design"
                            linkText="More Design"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>2 weeks Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="1 Weeks"
                            name="Usability Testing (round 2)"
                            slug="usability2"
                            link="/usability"
                            linkText="More usability"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>1 weeks Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="0 Days"
                            name="Development Specs"
                            slug="specs"
                            link="/specs"
                            linkText="More Specs"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>0 Days Before Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="2-3 Sprints"
                            name="Usability Test (round 3)"
                            slug="usability3"
                            link="/usability"
                            linkText="More Usability"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>2-3 Sprints Into Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="All Thru"
                            name="Design Support"
                            slug="support"
                            link="/support"
                            linkText="More Support"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>All Throughout Development</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="Each Year"
                            name="Benchmark Usability Testing"
                            slug="benchmark"
                            link="/benchmark"
                            linkText="More About Benchmarks"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/601"
                        >
                            <div>
                                <h3>After Launch and Yearly</h3>
                                <p>
                                    TODO
                                </p>
                            </div>
                        </ProjectOverviewCard>
                    </div>
                </Route>
            </Switch>
        </div>
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
