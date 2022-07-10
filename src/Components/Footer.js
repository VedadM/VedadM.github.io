import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <SocialIcon url="https://github.com/VedadM" bgColor="black" target="_blank" />
      <SocialIcon url="https://www.linkedin.com/in/vedad-muhamedagic-336a5017" bgColor="black" target="_blank"  />
      <SocialIcon url="https://www.instagram.com/_guy_dude_man_/" bgColor="black" target="_blank"  />
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 3vw;
  position: fixed;
  width: 100vw;
  bottom: 0;
  border-top: 3px solid #e4e4e4;
  background-color: rgba(255,255,255,0.5);
  box-sizing: border-box;

  @media (min-width: 800px) {
    padding: 10px 3vw;
  }

  & a {
    width: 40px !important;
    height: 40px !important;
    margin: 0 2vw;

    @media (min-width: 800px) {
      margin: 0 10px;
    }
  }
`;