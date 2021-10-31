import React from 'react';
import logo from './logo.svg';
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
      <header>Menu <Link to="/">Home</Link> | <Link to="/project1">Foo</Link> | <a href="https://nick.mosher.me">About Nick</a></header>
      <Switch>
        <Route path="/" exact>
          <section><div>Image box</div><Link to="/project1">Foo</Link></section>
          <section>Item 2</section>
          <section>Item 3</section>
        </Route>
        <Route path="/project1">
          <section><div>Image boxes</div></section>
          <section>Item 2</section>
          <section>Item 3</section>
        </Route>
      </Switch>
      <footer></footer>
    </Router>
  );
}

export default App;
