import React from "react";
import styled from "styled-components";
import BrandLogo from "../brandLogo";
import { Marginer } from "../marginer";
import FarmingImg from "../../images/farming.png";

const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #264653;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Slogan = styled.h2`
  margin: 20px;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
`;

const StandoutImage = styled.div`
  width: 35em;
  height: 29em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SpecialistAd = () => {
  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo />
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>You're a specialist, and you</Slogan>
            <Slogan>have an outstanding </Slogan>
            <Slogan>Service to offer?</Slogan>
          </SloganContainer>
        </SloganContainer>
        <StandoutImage>
          <img src={FarmingImg} alt="join as a specialist " />
        </StandoutImage>
      </ContentContainer>
    </SpecialistAdContainer>
  );
};

export default SpecialistAd;
