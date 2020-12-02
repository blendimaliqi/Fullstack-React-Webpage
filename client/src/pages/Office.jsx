import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import OfficeGrid from '../components/Office/OfficeGrid.jsx';
import OfficeList from '../components/Office/OfficeList.jsx';
import Banner from '../components/Banner';

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
  margin-bottom: 50px;
`;

const NoMarginContainer = styled.section`
  margin: 0;
  padding: 0;
`;


const Select = styled.select `
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
  
  const [officesFredrikstad, setOfficesFredrikstad] = useState([
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
    {
      id: 6,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      email: 'lokasjonnummer@epost.no',
    },
    {
      id: 7,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      email: 'lokasjonnummer@epost.no',
    },
    {
      id: 8,
      name: 'rørlegger nummer',
      adress: 'rørlegger gata',
      phone: '69 99 00 00',
      email: 'lokasjonnummer@epost.no',
    },
  ]);
  
  const [officesMoss, setOfficesMoss] = useState([
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
    {id: 6,
    name: 'rørlegger nummer',
    adress: 'rørlegger gata',
    phone: '69 99 00 00',
    email: 'lokasjonnummer@epost.no',
  },
  ]);

  const [officesOslo, setOfficesOslo] = useState([
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
    {id: 6,
    name: 'rørlegger nummer',
    adress: 'rørlegger gata',
    phone: '69 99 00 00',
    email: 'lokasjonnummer@epost.no',
  },
    {id: 7,
    name: 'rørlegger nummer',
    adress: 'rørlegger gata',
    phone: '69 99 00 00',
    email: 'lokasjonnummer@epost.no',
  },
  ]);

  
  const [offices, setOffices] = useState([])

  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);

  const [filterOptions, setFilterOption] = useState("Alle kontorer");

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
    console.log(filterOptions + " i handleFIlter");
    
    if(filterOptions === "Fredrikstad") {
      setChosenOffice(officesFredrikstad);
    } else if(filterOptions === "Sarpsborg") {
      setChosenOffice(officesSarpsborg);
    }
   else if(filterOptions === "Moss") {
      setChosenOffice(officesMoss);
    }
    else if(filterOptions === "Oslo") {
      setChosenOffice(officesOslo);
    }
  }



  return (
    <>
      <Banner title="Våre kontorer" />
      <Container>
        <FlexContainer>
          <BtnContainer>
            <Select onChange={handleFilter} value={filterOptions}>
            <option value="Alle kontorer">
                Alle kontorer
              </option>
              <option value="Fredrikstad">
                Fredrikstad
              </option>
              <option value="Sarpsborg">
                Sarspborg
              </option>
              <option value="Moss">
                Moss
              </option>
              <option value="Oslo">
                Oslo
              </option>
            </Select>
            <ListBtn onClick={onListBtnClick}>
              <FontAwesomeIcon icon={faThList} />
            </ListBtn>
            <GridBtn onClick={onGridBtnClick}>
              <FontAwesomeIcon icon={faThLarge} />
            </GridBtn>
          </BtnContainer>
        </FlexContainer>
        {gridView &&  (
          <>
            {filterOptions==="Alle kontorer" &&
            <>
              <LocationTitle>Fredrikstad ({officesFredrikstad.length})</LocationTitle>
              <OfficeGrid offices={officesFredrikstad} />
              <LocationTitle>Sarpsborg ({officesSarpsborg.length})</LocationTitle>
              <OfficeGrid offices={officesSarpsborg} />
              <LocationTitle>Moss ({officesMoss.length})</LocationTitle>
              <OfficeGrid offices={officesMoss} />
              <LocationTitle>Oslo ({officesOslo.length})</LocationTitle>
              <OfficeGrid offices={officesOslo} />
              </>
            }

            {filterOptions!=="Alle kontorer" &&
            <>
            {chosenOffice.length!=0 &&
            <>
              <LocationTitle>{filterOptions} ({chosenOffice.length} {console.log(filterOptions + chosenOffice)})</LocationTitle>
              <OfficeGrid offices={chosenOffice} />
            </>
            }
            </>
            
            }
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
    </>
  );
};

export default Office;
