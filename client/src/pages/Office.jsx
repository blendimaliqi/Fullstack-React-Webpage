import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import OfficeGrid from '../components/Office/OfficeGrid.jsx';
import OfficeList from '../components/Office/OfficeList.jsx';

const Container = styled.section`
  margin-top: 8rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const FilterBtn = styled.button`
  display: flex;
  background-color: lightgray;
  padding: 1.5rem 2.7rem;
  border: 0;
  font-weight: bold;
  font-size: 0.6rem;
  max-height: 4rem;
  align-items: center;
  margin-right: 1.3rem;
`;

const ListBtn = styled.button`
  font-size: 2rem;
  background-color: white;
  border: 0;
  color: #5e5e5e;
`;

const GridBtn = styled.button`
  font-size: 2rem;
  background-color: white;
  border: 0;
  color: #5e5e5e;
`;

const BtnContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const LocationTitleWithBtns = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
`;

const LocationTitle = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  margin-left: 11.5rem;
`;

const FlexContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 11.5rem;
`;


const Office = () => {
  const [offices, setOffices] = useState([
    {
      id: 1,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      email: 'lokasjonnummer@epost.no',
    },
    {
      id: 2,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      email: 'lokasjonnummer@epost.no',
    },
    {
      id: 3,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      email: 'lokasjonnummer@epost.no',
    },
    {
      id: 4,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      email: 'lokasjonnummer@epost.no',
    },
    {
      id: 5,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      email: 'lokasjonnummer@epost.no',
    },
  ]);
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);

  const onListBtnClick = () => {
    setListView(true);
    setGridView(false);
  };

  const onGridBtnClick = () => {
    setGridView(true);
    setListView(false);
  };

  return (
    <Container>
      <FlexContainer>
        <LocationTitleWithBtns>
          Fredrikstad ({offices.length})
        </LocationTitleWithBtns>
        <BtnContainer>
          <FilterBtn>FILTER</FilterBtn>
          <ListBtn onClick={onListBtnClick}>
            <FontAwesomeIcon icon={faThList} />
          </ListBtn>
          <GridBtn onClick={onGridBtnClick}>
            <FontAwesomeIcon icon={faThLarge} />
          </GridBtn>
        </BtnContainer>
      </FlexContainer>
      {gridView && (
        <>
          <OfficeGrid offices={offices} />
          <LocationTitle>Sarpsborg ({offices.length})</LocationTitle>
          <OfficeGrid offices={offices} />
          <LocationTitle>Moss ({offices.length})</LocationTitle>
          <OfficeGrid offices={offices} />
          <LocationTitle>Oslo ({offices.length})</LocationTitle>
          <OfficeGrid offices={offices} />
        </>
      )}
      {listView && (
        <>
          <OfficeList offices={offices} />
          <LocationTitle>Sarpsborg ({offices.length})</LocationTitle>
          <OfficeList offices={offices} />
          <LocationTitle>Moss ({offices.length})</LocationTitle>
          <OfficeList offices={offices} />
          <LocationTitle>Oslo ({offices.length})</LocationTitle>
          <OfficeList offices={offices} />
        </>
      )}
    </Container>
  );
};

export default Office;
