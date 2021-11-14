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
                                <b>Senior User Experience Designer</b>
                                {' '}
                                , husband, and father. Here I have collected a small
                                sample of my work as a designer, researcher, futurist,
                                and innovator. Let me know if you have any questions:
                                {' '}
                                <a href="mailto:nick@mosher.me">nick@mosher.me</a>
                                {''}
                                .
                            </p>
                            <p>
                                This portfolio will highlight each stage of my design process.
                                However, I understand that each project is unique and requires
                                its own process customized to its individual needs. I hope to
                                introduce you to my thoughts about each stage as well as provide
                                an example artifact.
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
                            imgDesc="The image was taken from a Futures Thinking workshop
                            I facilitated at the AAFP. It is a map of possible consequences
                            to a scenario our team wrote on day six of the workshop. In
                            &quot;Draw Out consequences&quot; the team works to identify
                            impacts of decisions and actions that others may take in response
                            to a scenario. This technique chains if-then statements to form a
                            more complex scenario."
                        >
                            <div>
                                <h3>10-30 Years Ahead</h3>
                                <p>
                                    Futures Thinking does not predict the future. Rather,
                                    it is a cross-disciplinary approach to considering
                                    potential futures by exploring trends and drivers
                                    for change. I facilitate Futures Thinking workshops
                                    that provide a framework for stakeholders with
                                    decision-making power to imagine possible futures
                                    concerning a product, company, or industry.
                                </p>
                                <p>
                                    Each of the 16 workshop curricula I employ typically
                                    last a day and are flexible and adaptable to the needs
                                    of the business area. The workshops are based on the
                                    work of leading futurist Bob Johansen’s foresight
                                    to insight to action cycle and help business and
                                    design teams determine:
                                </p>
                                <ol>
                                    <li>
                                        The possible, probable, and preferable futures
                                        for your business unit or product.
                                    </li>
                                    <li>The ideal future you want to drive towards.</li>
                                    <li>
                                        A roadmap towards that future, including a
                                        process to proactively shape change.
                                    </li>
                                </ol>
                                <p>
                                    By encouraging Futures Thinking through these workshops,
                                    I can help a business gain vision, understanding,
                                    clarity, and agility in a user-centered design world
                                    where the users themselves are constantly changing.
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
                            imgDesc="The screenshot above shows the format of my standard interview report template. I try to keep it short and to the point. It also helps to link or embed clips from the session. This allows for quick scanning by busy people and more in-depth reviews when needed."
                        >
                            <div>
                                <h3>1 Month Before Development</h3>
                                <p>
                                    Interviewing customers, members, or users is a
                                    vital part of the design and product development
                                    process. By understanding the needs of our users,
                                    we can build better software the first time. I
                                    have conducted customer interviews through contextual
                                    inquiry, phone interviews, zoom interviews, and
                                    face to face interviews. All forms have their benefits.
                                </p>
                                <p>
                                    Customer interviews are not usability tests.
                                    They are 1:1 conversations where the researcher
                                    can begin to understand users’ environment, needs,
                                    tasks, and more. It helps uncover issues that
                                    normally wouldn’t be known until much later
                                    in the development cycle, saving time and money.
                                </p>
                                <p>
                                    I find the most productive time to run customer
                                    interviews is the beginning of the project or
                                    when a product needs a good revamp. These interviews
                                    can produce  new insights and interesting product
                                    feature ideas, but only if the team understands
                                    the research. The best method for sharing information
                                    from interviews that I have found is to have
                                    team members watch the interviews. Many times,
                                    team members are not available for the actual
                                    interviews. I have also found that most people,
                                    while well intentioned, do not find the time
                                    to watch recorded sessions. I proactively schedule
                                    debriefings with team members where I discuss
                                    my findings from and show footage of the interviews.
                                    This has been effective in building empathy for
                                    our end users among team members and has helped
                                    them center the users’ needs as they develop products.
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
                            imgDesc="The screenshot above shows (and links to) the most effective of these techniques: a small website that I made that took our set of personas and turned them into interactive cards. Team members could bookmark these cards and use them when building stories and developing features. "
                        >
                            <div>
                                <h3>1 Month Before Development</h3>
                                <p>
                                    Personas are a common deliverable in usability work.
                                    They are characters simulated from user research that
                                    offer the project team a picture of target users to
                                    reference in their user stories, how they’re likely
                                    to use the product, and what they’re likely to expect
                                    from it. Often the personas have key needs, goals,
                                    and demographic information that should correspond
                                    to wider groups of real users.
                                </p>
                                <p>
                                    While industry accepts that personas are an invaluable
                                    UX tool, I have found that personas are a great tool
                                    for about the first two weeks of a project. After
                                    that, I have noticed that teams drift away from
                                    using personas and it takes a strong effort to
                                    keep them relevant. Over the years I tried several
                                    techniques  to strengthen my teams’ focus on the
                                    developed personas, including: posters on the walls,
                                    table tents on the meeting room tables, playing cards,
                                    and even large foam boards that I would carry into
                                    meetings. Each technique had some small benefit but
                                    was ultimately discarded over time for lack of use.
                                </p>
                                <p>
                                    In the end, I would suggest that UX teams not
                                    spend much time on personas if their teams are
                                    not receptive to them. I have found that the
                                    real empathy teams feel for actual users is a
                                    much stronger and more lasting motivator than
                                    simulated personas to keep user interests at
                                    the heart of projects. I help teams build empathy
                                    with real users by ensuring team members participate
                                    in, watch, and help review actual user feedback.
                                    This can be done in user interviews, usability
                                    testing, and even on support calls.
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
                            imgDesc="I displayed the workflow shown above outside my cube for over a year. This 12 foot long and isthe simplified version of our education accreditation product. This incredibly complex application required this workflow map to even keep track of where we were in any given scenario or development task. The team found it so useful that I rolled it up and carried it, physically, into our agile sprint ceremonies for months. This particular version was the 8th major version and 14th minor update. A digital version continues lives on to this day and we update it as we add new features to the app."
                        >
                            <div>
                                <h3>3 weeks Before Development</h3>
                                <p>
                                    Workflow maps, system diagrams, and journey maps
                                    clarify the flow of a product, process, or user
                                    journey. Each of these outcomes become vital to
                                    building a good, full product that doesn’t leave
                                    any dead-ends or infinite loops for the users to have to navigate.
                                </p>
                                <p>
                                    Each tool requires a deep understanding of the
                                    user, the business needs, and the technical restraints.
                                    Through my career I have worked as a product owner,
                                    developer, researcher, and designer. I bring a unique
                                    perspective and history from all angles of the product
                                    development cycle. This allows me to ask deeper questions
                                    and understand more opportunities for additional discussion.
                                </p>
                                <p>
                                    These maps can provide much more clarity than a
                                    wireframe or prototype when questions about process
                                    come up. I have found that they even provide a
                                    great shortcut for getting into a specific screen in a workflow.
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
                            imgDesc="The screenshot above provides an example analysis of a card sort I completed on our staff intranet in [TODO (MM/YY)]. Our product owner had some extra time while she was working on the technology, and we were able to help her re-arrange the menus into a much more intuitive structure. This report was vital in helping her make good decisions about her content."
                        >
                            <div>
                                <h3>3 weeks Before Development</h3>
                                <p>
                                    Card sorts help you build intuitive structure
                                    into your application or website, know your users
                                    better, and help you find the right labels for
                                    sections of your information architecture.
                                </p>
                                <p>
                                    Teams use open and closed card sorting to understand
                                    how people think of a particular data set. Card
                                    sorts are usually used for information architecture
                                    but can help teams group items intuitively for their
                                    users in many varied circumstances.
                                </p>
                                <p>
                                    Typically, when teams are looking at the structure
                                    of their content, they are in a hurry to get into
                                    the next step. By using online tools like UserZoom,
                                    I have been able to complete card sort studies in
                                    days and have initial results back to teams in
                                    less than a week. This helps the team keep moving
                                    quickly without being bogged down by another research task.
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
                            imgDesc="In the screenshot above you can see a section of that massive I.A. as displayed in excel. Product teams used this to ensure their pieces all interacted successfully with the rest of the site."
                        >
                            <div>
                                <h3>3 weeks Before Development</h3>
                                <p>
                                    Information architecture is arguably the most vital
                                    part of a website’s success. Without a good, intuitive
                                    organization of your content your users will have to
                                    rely on google or in-site search. This often leads
                                    to frustration or worse, clicks onto other websites.
                                    You need to speak your users’ language to make it easy
                                    for them to accomplish their tasks.
                                </p>
                                <p>
                                    During our 2020 redesign I audited the overall I.A.
                                    of the aafp.org website and all applications. I
                                    found that our site was siloed into sections
                                    based on the technology used to build each section
                                    or the  different teams in charge of the content
                                    of each section. This created an I.A. with dead
                                    ends and circular paths that would lead users back
                                    to where they’d started. Applications were placed
                                    in I.A. locations that made sense to product owners,
                                    but not to the AAFP member users.  It was a challenge
                                    to understand the greater picture of how the various
                                    components of the I.A. functioned as a whole.
                                </p>
                                <p>
                                    A world-famous design firm helped us with the website
                                    redesign, however we still needed someone with
                                    a deep understanding of the AAFP’s users, its systems,
                                    and its tools to create the best integrated experience
                                    of our website. I produced a seamless solution that
                                    integrated all these areas into one cohesive experience
                                    for our users while still allowing the technical
                                    systems to stand alone. Users don’t have to know
                                    that some apps were vendor built, some apps are
                                    in .net, and some in JAVA. They all work together
                                    because they interface with our overall I.A.
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
                            imgDesc="foo"
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
                            imgDesc="foo"
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
                            imgDesc="foo"
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
                            imgDesc="foo"
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
                            imgDesc="foo"
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
                            imgDesc="foo"
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
                            imgDesc="foo"
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
                            imgDesc="foo"
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
                            imgDesc="foo"
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
                            imgDesc="foo"
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
