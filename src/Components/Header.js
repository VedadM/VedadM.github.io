import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Menu>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/about"> About</HeaderLink>
        <HeaderLink to="/contact"> Contact</HeaderLink>
      </Menu>
    </Nav>
  );
};
  
export default Header;

const Nav = styled.nav`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  grid-template-areas: "menus";
  justify-items: stretch;
  align-items: stretch;
  column-gap: 20px;
  height:  40px;
`;

const Menu = styled.div`
  background: lightsalmon;
  grid-area: menus;
  display: flex;
  flex-direction: row;
  justify-content: start;
  height: 100%;
  align-items: center;
}`

const HeaderLink = styled(Link)`
  display: flex;
  margin: 0 20px;
`;
  