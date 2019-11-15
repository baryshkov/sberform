import React, { Component } from 'react';
import LoginForm from '../LoginForm';
import './App.css';
import arrow from '../../resources/arrow.svg';

class App extends Component {
  state = {
    phoneList: ['79996667788', '79999999999'],
  };

  render() {
    const { phoneList } = this.state;
    return (
      <div className="wrapper">
        <div className="blur" />
        <div className="App">
          <section className="padding">
            <a className="return" href="#">
              <img src={arrow} className="arrow" alt="arrow" />
              вернуться
            </a>
            <LoginForm phoneList={phoneList} />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
