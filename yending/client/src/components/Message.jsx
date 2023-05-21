import React from 'react';
import ReactDOM from 'react-dom';

function Message() {
  return (
    // Contenido del componente Message
    <div>
      <h1>Message Component</h1>
    </div>
  );
}

export default Message;

ReactDOM.render(<Message />, document.getElementById('rootMessage'));