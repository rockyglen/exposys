import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/logos/logo.png";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: #fff;
  font-weight: 700;
  margin-left: 6px;
`;
const BrandLogo = (props) => {
  const { logoSize, textSize } = props;
  return (
    <BrandLogoContainer>
      <LogoImage size={logoSize}>
        <img src={LogoImg} alt="servycing logo"></img>
      </LogoImage>
      <LogoTitle size={textSize}>Servycing</LogoTitle>
    </BrandLogoContainer>
  );
};

export default BrandLogo;
