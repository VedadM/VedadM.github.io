import App from './App.js';

import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [{
    component: App,
    routes: [{
        path: '/',
        component: Home,
        exact: true,
    },{
        path: '/about',
        component: About,
        exact: true,
    }, {
        path: '/contact/',
        component: Contact,
        exact: true,
    }]
}];