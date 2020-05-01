import React from 'react';
import { Link } from 'react-router-dom';
import * as Errors from '../data/errors';

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>{Errors['PAGE_NOT_FOUND']}</h2>
      <Link to="/">
        <button type="button">На главную</button>
      </Link>
    </div>
  );
}

export { NotFound };
