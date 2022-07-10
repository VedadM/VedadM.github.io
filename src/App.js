import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

function App() {
  return (
    <MainContainer>
      <Header />

      <ContentContainer>
        <SideNavContainer>
          <SideNav />
        </SideNavContainer>

        <RoutesContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
          </Routes>
        </RoutesContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  background-color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const SideNavContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 3vw 0;
  border-bottom: 4px dashed black;

  @media (min-width: 800px) {
    width: 15vw;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    border-bottom: 0;
  }
`;

const RoutesContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  margin: 0vw;
  font-size: 20px;
  padding: 5vw;
  margin-bottom: 10vw;

  @media (min-width: 800px) {
    width: 30vw;
    padding: 0vw;
    margin: 1vw;
  }
`;
