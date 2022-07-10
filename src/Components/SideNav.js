import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SideNav() {
  return (
    <>
      <LinkContainer>
        <Link to="/">Home</Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/about">About</Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/work">Work</Link>
      </LinkContainer>
    </>
  )
}

export default SideNav;

const LinkContainer = styled.div`
  display: block;
  box-sizing: border-box;
  margin: 1vw;
  font-size: 25px;
  width: 25%;
  text-align: center;

  @media (min-width: 800px) {
    width: 100%;
    text-align: left;
    padding: 1vw 25px;
    margin: 0;
  }

  & a {
    color: black;

    &:hover {
      color: red;
    }
  }
`;