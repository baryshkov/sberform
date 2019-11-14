import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import './LoginForm.css';
import avatar from '../../resources/circle-cropped (3).png';

class LoginForm extends Component {
  state = {
    userData: [
      {
        phone: '',
        rememberMe: false,
        password: '',
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
        <form onSubmit={this.onSubmit} className="login-form">
          <InputMask
            mask="+7 ( 999 ) 999-99-99"
            className="login-form__input"
            placeholder="Номер телефона"
          />
          <input type="password" className="login-form__input" placeholder="Пароль" />
          <div className="login-form__remember">
            <input type="checkbox" className="login-form__checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Запомнить</label>
            <a href="#">Забыл пароль</a>
          </div>
          <input type="submit" value="ВОЙТИ" className="login-form__submit" disabled />
        </form>
      </div>
    );
  }
}

export default LoginForm;
