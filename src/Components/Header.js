import styled from "styled-components";

function Header () {
  return (
    <HeaderContainer>
      <HeaderText>
        Vedad M
      </HeaderText>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  padding: 1vw 5vw;
  border-bottom: 4px dashed black;

  @media (min-width: 800px) {
    padding: 10px 25px;
  }
`;

const HeaderText = styled.h1`
  font-size: 40px;
`;
