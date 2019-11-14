import React, { Component } from 'react';
import LoginForm from '../LoginForm';
import 'normalize.css';
import './App.css';
import arrow from '../../resources/Group.svg';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="blur"></div>
        <div className="App">
          <section className="padding">
            <a className="return" href="#">
              <img src={arrow} className="arrow" alt="arrow" />
              вернуться
            </a>
            {/*<div className="container">*/}
              <LoginForm />
            {/*</div>*/}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
