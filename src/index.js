import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
      {renderRoutes(routes)}
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
