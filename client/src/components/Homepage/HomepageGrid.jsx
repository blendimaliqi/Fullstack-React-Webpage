import React from 'react';
import styled from 'styled-components';

const WholeContainer = styled.section`
  width: 90%;
  margin: 0 auto;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  margin: 0 auto;
`;

const BoxSection = styled.section`
  display: flex;
  background-color: #dbdbdb;
  font-weight: bolder;
  height: 300px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 30px;
  }
`;

const BottomBox = styled.section`
  display: flex;
  font-weight: bolder;
  background-color: #dbdbdb;
  height: 400px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 30px;
  }
`;

export const HomepageGrid = () => (
  <WholeContainer>
    <Grid>
      <BoxSection>
        <h1>Kontorer</h1>
      </BoxSection>

      <BoxSection>
        <h1>Kontorer</h1>
      </BoxSection>
    </Grid>
    <BottomBox>
      <h1>Kontorer</h1>
    </BottomBox>
  </WholeContainer>
);
export default HomepageGrid;
