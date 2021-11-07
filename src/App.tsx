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
        <div className="site-content">
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
                    <div className="projects">
                        <h1 className="stages">Stages of Design</h1>
                        <ProjectOverviewCard
                            time="-30 Years"
                            name="Design Futures"
                            link="/futures"
                            linkText="More Futures Work"
                            imgAlt="TODO"
                            imgSrc="//placekitten.com/800/600"
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
                            </div>
                        </ProjectOverviewCard>
                        <ProjectOverviewCard
                            time="-1 Month"
                            name="Customer Interviews"
                            link="/interviews"
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
                            time="-3 Weeks"
                            name="Workflow"
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
                            time="-2 Weeks"
                            name="Wireframes"
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
                            time="-2 Weeks"
                            name="Usability Testing (round 1)"
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
                            time="-2 Weeks"
                            name="Design Sprints"
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
                            time="-2 Weeks"
                            name="Visual Design"
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
                            time="-1 Weeks"
                            name="Usability Testing (round 2)"
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
                            time="All Througout"
                            name="Design Support"
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
                            link="/benchmarks"
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
