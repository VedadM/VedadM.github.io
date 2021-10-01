import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';

import Header from './Components/Header';
import Footer from './Components/Footer';
import GlobalCSS from './Style/global.css'; 

function App(props) {
  return (
    <Wrapper>
      <GlobalCSS />
      <Header />
      { renderRoutes(props.route.routes) }
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: 
    "header"
    "content"
    "menu";
    grid-template-rows: max-content auto max-content;
`;
