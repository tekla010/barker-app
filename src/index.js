import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>

      <div>
        <Navbar bg="light" expand="lg">
            <Link activeClassName="active" exact to="/">Homepage</Link>
            <Link activeClassName="active" to="/Auth">Auth View</Link>
            <Link activeClassName="active" to="/Home">Home View</Link>
          </Navbar>
      </div>
      <header className="App-header">
        Welcome to the bookshelf!
      </header>

      <Switch>
        <Route
          exact
          path='/'
          component={App}
        />
        <Route
          path='/Auth'
          component={Login}
        />
      </Switch>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
