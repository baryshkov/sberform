import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import avatar from '../../resources/circle-cropped (3).png';

class LoginForm extends Component {
  state = {
    userData: [
      {
        name: 'Vasya',
        phone: '+79666666666',
        rememberMe: false,
        password: 'lol12345',
      },
      {
        name: 'Prosche Pozvonit',
        phone: '88005553535',
        rememberMe: true,
        password: 'lol12345',
      },
    ],
  };

  onSubmit = () => {
    console.log('submit');
  };

  render() {
    return (
      <div className="container">
        <img src={avatar} className="" alt="logo" />
        <form onSubmit={this.onSubmit}>
          <InputMask mask="+7 ( 999 ) 999-99-99" placeholder="Номер телефона" />
          <input type="password" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
