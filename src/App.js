import { renderRoutes } from 'react-router-config';

import Header from './Components/Header';
import Footer from './Components/Footer';

function App(props) {
  return (
    <div>
      <Header />
      { renderRoutes(props.route.routes) }
      <Footer />
    </div>
  );
}

export default App;
