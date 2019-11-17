import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import './LoginForm.css';
import avatar from '../../resources/avatar.png';
import check from '../../resources/login_checkmark.svg';
import exclamation from '../../resources/login_error.svg';

const VALID_PHONE_LENGTH = 11;

class LoginForm extends Component {
  state = {
    phone: '',
    password: '',
    rememberMe: false,
    phoneValid: false,
    phoneLength: 0,
    passwordValid: false,
    formValid: false,
  };

  validateForm = () => {
    const { phoneValid, passwordValid, phoneLength } = this.state;
    if (!passwordValid || !phoneValid) {
      this.setState({ formValid: false });
    }
    if (phoneLength === VALID_PHONE_LENGTH && phoneValid && passwordValid) {
      this.setState({ formValid: true });
    }
  };

  validateFieldOnChange = e => {
    const { name, value } = e.target;
    const { phoneList } = this.props;
    let { phone, phoneValid, phoneLength, passwordValid, password } = this.state;

    switch (name) {
      case 'phone':
        phone = value.replace(/[^A-Z0-9]+/gi, '');
        phoneValid = phoneList.includes(phone);
        phoneLength = phone.length;
        break;
      case 'password':
        password = value;
        passwordValid = value.length >= 5;
        break;
      default:
        break;
    }
    this.setState({ phone, phoneValid, phoneLength, passwordValid, password }, this.validateForm);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(
      '%c SUCCESS!',
      'color: darkorange; font-size: 20px; background: indigo; padding: 30px;',
    );
    console.table({
      phone: this.state.phone,
      password: this.state.password,
      rememberMe: this.state.rememberMe,
    });
  };

  onToggle = () => {
    const { rememberMe } = this.state;
    this.setState({
      rememberMe: !rememberMe,
    });
  };

  render() {
    const { password, rememberMe, formValid, phoneValid, phoneLength } = this.state;
    const phoneClassname = phoneValid
      ? 'login-form__input login-form__input-valid'
      : 'login-form__input';
    return (
      <div className="container">
        <img src={avatar} className="" alt="logo" />
        <form onSubmit={this.onSubmit} className="login-form">
          <InputMask
            mask="+7 ( 999 ) 999-99-99"
            name="phone"
            className={phoneClassname}
            placeholder="Номер телефона"
            onChange={this.validateFieldOnChange}
            required
          />
          {phoneValid && <img src={check} alt="check" className="login-form__input-check" />}
          {!phoneValid && phoneLength === VALID_PHONE_LENGTH && (
            <img src={exclamation} alt="error" className="login-form__input-error" />
          )}
          <input
            type="password"
            name="password"
            className="login-form__input login-form__input-password"
            placeholder="Пароль"
            onChange={this.validateFieldOnChange}
            value={password}
            required
          />
          <div className="login-form__remember">
            <div className="login-form__checkbox-container">
              <input
                type="checkbox"
                className="login-form__checkbox"
                id="rememberMe"
                onChange={this.onToggle}
                checked={rememberMe}
              />
              <label htmlFor="rememberMe" className="login-form__checkbox-label" />
              <label
                htmlFor="rememberMe"
                className="login-form__checkbox-label_text"
                onChange={this.onToggle}
                tabIndex={0}
              >
                Запомнить
              </label>
            </div>
            <a href="#" className="login-form__forgot-password">
              Забыл пароль
            </a>
          </div>
          <input type="submit" value="ВОЙТИ" className="login-form__submit" disabled={!formValid} />
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  phoneList: PropTypes.array.isRequired,
};

export default LoginForm;
