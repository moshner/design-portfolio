import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <header><img src="/monogram.png" /><Link to="/">Home</Link> | <Link to="/project1">Foo</Link> | <a href="https://nick.mosher.me">About Nick</a></header>
      <Switch>
        <Route path="/" exact>
          <section className="project-overview">
              <div className="project-overview__image-box"><img className="image-box__img" src="//placekitten.com/800/600" /></div>
              <p className="project-overview__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa perspiciatis quod in facilis aut, voluptate laudantium aperiam consectetur saepe, corrupti, iure commodi id dignissimos ullam eaque alias illum rerum.</p>
              <Link className="project-overview__button" to="/project1">Foo</Link>
          </section>
          <section className="project-overview">Item 2</section>
          <section className="project-overview">Item 3</section>
        </Route>
      </Switch>
      <footer></footer>
    </Router>
  );
}

export default App;
