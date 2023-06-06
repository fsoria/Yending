
import React from 'react';
import ReactDOM from 'react-dom';

function Login() {
  const handleLogin = () => {
    window.location.href = 'https://yending.lightdata.app/';
  };

  return (
    <li>
      <a className="nav-link scrollto" onClick={handleLogin} style={{ cursor: 'pointer' }}>Ingresar</a>
    </li>
  );
}


export default Login

ReactDOM.render(<Login />, document.getElementById('rootLogin'));