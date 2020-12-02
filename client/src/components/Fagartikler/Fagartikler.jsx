import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../Banner';
import Artikkel from './ArticleItem';

const PageContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const SearchAndFilterContainer = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const SearchAndFilterButton = styled.button`
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

const NyArtikkelContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 300px;
  margin-right: 400px;
`;

const NyArtikkelButton = styled.button`
  display: flex;
  background-color: #469fb9;
  padding: 1.5rem 2.7rem;
  border: 0;
  font-weight: bold;
  font-size: 0.6rem;
  max-height: 4rem;
  align-items: center;
  margin-right: 1.3rem;
  color: white;
`;

const MainPage = styled.section`
  display: grid;
  justify-content: center;
`;

const WholePage = styled.section`
  display: grid;
  justify-content: center;
`;

export const Fagartikler = ({ history }) => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    setArticles([
      {
        id: 133782,
        title: 'How to fix your toilet?',
        ingress:
          'Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text',
      },
      {
        id: 133783,
        title: 'How to tile your bathroom?',
        ingress:
          'Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text',
      },
      {
        id: 133784,
        title: 'How to keep the shower clean?',
        ingress:
          'Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text',
      },
      {
        id: 133785,
        title: 'How to save toilet paper with geberit aquaclean?',
        ingress:
          'Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text here Lorem ipsum text',
      },
    ]);
  }, []);

  return (
    <>
      <Banner title="Fagartikler" />
      <WholePage>
        <PageContainer>
          <NyArtikkelContainer>
            <NyArtikkelButton onClick={() => history.push('/nyartikkel')}>
              NY ARTIKKEL
            </NyArtikkelButton>
          </NyArtikkelContainer>
          <SearchAndFilterContainer>
            <SearchAndFilterButton>SØK</SearchAndFilterButton>
            <SearchAndFilterButton>FILTER</SearchAndFilterButton>
          </SearchAndFilterContainer>
        </PageContainer>

        <MainPage>
          {articles &&
            articles.map((article) => (
              <Artikkel
                id={article.id}
                key={article.id}
                title={article.title}
                text={article.ingress}
              />
            ))}
        </MainPage>
      </WholePage>
    </>
  );
};

export default withRouter(Fagartikler);
