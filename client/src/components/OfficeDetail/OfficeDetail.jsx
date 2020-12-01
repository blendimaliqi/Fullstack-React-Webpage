import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, withRouter } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';
import KontaktOss from './KontaktOss';


const WholePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
`;

const GreetingContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 20px;
`;

const Container = styled.section`
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: bolder;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 40px;
`;

const EmployeesGrid = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 0.4fr));
`;

export const OfficeDetail = ({ number }) => {
  const [employees, setEmployee] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
  ]);

  const { id } = useParams();

  return (
    <WholePageContainer>
      <GreetingContainer>
        <Title>Velkommen til Rørlegger {id}</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet
        </Paragraph>
      </GreetingContainer>

      <Container>
        <Title>Våre Ansatte</Title>
        <EmployeesGrid>
          {employees.map((number) => (
            <EmployeeCard key={number} />
          ))}
        </EmployeesGrid>
        <KontaktOss />
      </Container>
    </WholePageContainer>
  );
};

export default OfficeDetail;
