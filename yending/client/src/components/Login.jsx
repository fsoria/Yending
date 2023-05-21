import React from 'react';
import ReactDOM from 'react-dom';

function Login() {

    const handleLogin = () => {
        window.location.href = 'https://yending.lightdata.app/';
      };

  return (

    <div>
      <h1>Login Component</h1>
    </div>
  );
}

export default Login

ReactDOM.render(<Login />, document.getElementById('rootLogin'));
