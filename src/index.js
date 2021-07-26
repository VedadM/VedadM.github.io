import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <div>
      {renderRoutes(routes)}
      </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
