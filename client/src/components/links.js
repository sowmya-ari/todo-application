import React from 'react';

import "../styles/links.css"

export default function Links() {
  return (
  <div className="links">
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="/">all</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/active">active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/completed">completed</a>
      </li>
    </ul>
  </div>
  );
}
