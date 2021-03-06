import React from 'react';
import './index.css';

const Email = ({ email, onClick }) => (
  <li onClick={() => onClick(email)}>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
);

export default React.memo(Email);
