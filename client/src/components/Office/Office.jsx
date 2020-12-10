import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import OfficeGrid from './OfficeGrid.jsx';
import OfficeList from './OfficeList.jsx';
import Banner from '../Banner.jsx';

const Container = styled.section`
  margin-top: 8rem;
`;

const ListBtn = styled.button`
  font-size: 2rem;
  background-color: white;
  border: 0;
  color: #5e5e5e;
  outline: none;
`;

const GridBtn = styled.button`
  font-size: 2rem;
  background-color: white;
  border: 0;
  color: #5e5e5e;
  outline: none;
`;

const BtnContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const LocationTitle = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  margin-left: 11.5rem;
`;

const FlexContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 11.5rem;
`;

const Select = styled.select`
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

const Office = () => {
  const [officesSarpsborg, setOfficesSarpsborg] = useState([
    {
      id: 1,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 01',
      location: 'Sarpsborg',
    },
    {
      id: 2,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 02',
      location: 'Sarpsborg',
    },
    {
      id: 3,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 03',
      location: 'Sarpsborg',
    },
    {
      id: 4,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 04',
      location: 'Sarpsborg',
    },
    {
      id: 5,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 05',
      location: 'Sarpsborg',
    },
  ]);

  const [officesFredrikstad, setOfficesFredrikstad] = useState([
    {
      id: 1,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Fredrikstad',
    },
    {
      id: 2,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Fredrikstad',
    },
    {
      id: 3,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Fredrikstad',
    },
    {
      id: 4,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Fredrikstad',
    },
    {
      id: 5,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Fredrikstad',
    },
    {
      id: 6,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Fredrikstad',
    },
    {
      id: 7,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Fredrikstad',
    },
    {
      id: 8,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Fredrikstad',
    },
  ]);

  const [officesMoss, setOfficesMoss] = useState([
    {
      id: 1,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Moss',
    },
    {
      id: 2,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Moss',
    },
    {
      id: 3,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Moss',
    },
    {
      id: 4,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Moss',
    },
    {
      id: 5,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Moss',
    },
    {
      id: 6,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Moss',
    },
  ]);

  const [officesOslo, setOfficesOslo] = useState([
    {
      id: 1,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Oslo',
    },
    {
      id: 2,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Oslo',
    },
    {
      id: 3,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Oslo',
    },
    {
      id: 4,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Oslo',
    },
    {
      id: 5,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Oslo',
    },
    {
      id: 6,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Oslo',
    },
    {
      id: 7,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      location: 'Oslo',
    },
  ]);

  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);

  const [filterOptions, setFilterOption] = useState('Alle kontorer');

  const [chosenOffice, setChosenOffice] = useState([]);

  const onListBtnClick = () => {
    setListView(true);
    setGridView(false);
  };

  const onGridBtnClick = () => {
    setGridView(true);
    setListView(false);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilterOption(e.target.value);
    console.log(`${filterOptions} i handleFIlter`);

    if (e.target.value === 'Fredrikstad') {
      setChosenOffice(officesFredrikstad);
    } else if (e.target.value === 'Sarpsborg') {
      setChosenOffice(officesSarpsborg);
    } else if (e.target.value === 'Moss') {
      setChosenOffice(officesMoss);
    } else if (e.target.value === 'Oslo') {
      setChosenOffice(officesOslo);
    }
  };

  return (
    <>
      <Banner title="Våre kontorer" />
      <Container>
        <FlexContainer>
          <BtnContainer>
            <Select onChange={handleFilter} value={filterOptions}>
              <option value="Alle kontorer">Alle kontorer</option>
              <option value="Fredrikstad">Fredrikstad</option>
              <option value="Sarpsborg">Sarspborg</option>
              <option value="Moss">Moss</option>
              <option value="Oslo">Oslo</option>
            </Select>
            <ListBtn
              style={{ color: listView ? '#53a5be' : '#5e5e5e' }}
              onClick={onListBtnClick}
            >
              <FontAwesomeIcon icon={faThList} />
            </ListBtn>
            <GridBtn
              style={{ color: gridView ? '#53a5be' : '#5e5e5e' }}
              onClick={onGridBtnClick}
            >
              <FontAwesomeIcon icon={faThLarge} />
            </GridBtn>
          </BtnContainer>
        </FlexContainer>
        {gridView && (
          <>
            {filterOptions === 'Alle kontorer' && (
              <>
                <LocationTitle style={{ marginTop: '0' }}>
                  Fredrikstad ({officesFredrikstad.length}
                  {' Kontorer'})
                </LocationTitle>
                <OfficeGrid offices={officesFredrikstad} />
                <LocationTitle>
                  Sarpsborg ({officesSarpsborg.length}
                  {' Kontorer'})
                </LocationTitle>
                <OfficeGrid offices={officesSarpsborg} />
                <LocationTitle>
                  Moss ({officesMoss.length}
                  {' Kontorer'})
                </LocationTitle>
                <OfficeGrid offices={officesMoss} />
                <LocationTitle>
                  Oslo ({officesOslo.length}
                  {' Kontorer'})
                </LocationTitle>
                <OfficeGrid offices={officesOslo} />
              </>
            )}

            {filterOptions !== 'Alle kontorer' && (
              <>
                {chosenOffice.length !== 0 && (
                  <>
                    <LocationTitle style={{ marginTop: '0' }}>
                      {filterOptions} ({chosenOffice.length}
                      {' Kontorer'}
                      {console.log(filterOptions + chosenOffice)})
                    </LocationTitle>
                    <OfficeGrid offices={chosenOffice} />
                  </>
                )}
              </>
            )}
          </>
        )}
        {listView && (
          <>
            {filterOptions === 'Alle kontorer' && (
              <>
                <LocationTitle style={{ marginTop: '0' }}>
                  Fredrikstad ({officesFredrikstad.length}
                  {' Kontorer'})
                </LocationTitle>
                <OfficeList offices={officesFredrikstad} />
                <LocationTitle>
                  Sarpsborg ({officesSarpsborg.length}
                  {' Kontorer'})
                </LocationTitle>
                <OfficeList offices={officesSarpsborg} />
                <LocationTitle>
                  Moss ({officesMoss.length}
                  {' Kontorer'})
                </LocationTitle>
                <OfficeList offices={officesMoss} />
                <LocationTitle>
                  Oslo ({officesOslo.length}
                  {' Kontorer'})
                </LocationTitle>
                <OfficeList offices={officesOslo} />
              </>
            )}
            {filterOptions !== 'Alle kontorer' && (
              <>
                {chosenOffice.length !== 0 && (
                  <>
                    <LocationTitle style={{ marginTop: '0' }}>
                      {filterOptions} ({chosenOffice.length}
                      {' Kontorer'}
                      {console.log(filterOptions + chosenOffice)})
                    </LocationTitle>
                    <OfficeList offices={chosenOffice} />
                  </>
                )}
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Office;
