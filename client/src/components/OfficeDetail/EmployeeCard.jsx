import React from 'react';
import styled from 'styled-components';

const Picture = styled.section`
  width: 220px;
  height: 160px;
  background-color: #e8e8e8;
`;

const Card = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 14px;
`;

const Paragraph = styled.p`
  margin-bottom: 40px;
`;

export const EmployeeCard = () => (
  <>
    <Card>
      <Picture />
      <p>Ansatt Ansattnavn</p>
      <Paragraph>Stilling</Paragraph>
    </Card>
  </>
);

export default EmployeeCard;
