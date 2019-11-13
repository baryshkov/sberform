import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    userData: [
      {
        name: 'Vasya',
        phone: '+79666666666',
        rememberCookie: false,
      },
      {
        name: 'Prosche Pozvonit',
        phone: '88005553535',
        rememberCookie: true,
      },
    ],
  };

   render() {
    return (
      <div className="LoginForm">
        <div>Номер телефона</div>
      </div>
    );
  }
}

export default LoginForm;
