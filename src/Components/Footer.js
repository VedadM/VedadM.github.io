import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <CopyRight>Footer stuff goes here</CopyRight>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  height: 50px;
  display: grid;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

const CopyRight = styled.div`
  color: white
`;