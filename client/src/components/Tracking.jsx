import React from 'react';
import ReactDOM from 'react-dom';

function Tracking() {
  const handleTracking = () => {
    window.location.href = 'https://yending.lightdata.app/tracking.php';
  };

  return (
    <li>
      <a className="nav-link scrollto" onClick={handleTracking} style={{ cursor: 'pointer' }}>Seguimiento</a>
    </li>
  );
}

export default Tracking;

ReactDOM.render(<Tracking />, document.getElementById('rootTracking'));