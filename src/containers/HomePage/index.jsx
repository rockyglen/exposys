import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import TopSection from "./topSection";
import ServiceCard from "../../components/serviceCard";
import Services from "./services";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HomePage = (props) => {
  return (
    <div>
      <PageContainer>
        <TopSection>
          <Navbar />
        </TopSection>
        <InnerPageContainer>
          <ContentContainer>
            <Services />
          </ContentContainer>
        </InnerPageContainer>
      </PageContainer>
    </div>
  );
};

export default HomePage;
