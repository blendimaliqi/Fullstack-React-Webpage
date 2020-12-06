import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useUserState } from '../../context/UserProvider';
import { list } from '../../utils/articleService.js';
import { listCategories } from '../../utils/categoryService.js';
import Banner from '../Banner';
import Artikkel from './ArticleItem';

const PageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
`;

const SearchAndFilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 21%;
`;

const SearchButton = styled.button`
  display: flex;
  background-color: lightgray;
  padding: 1.5rem 2.7rem;
  border: 0;
  font-weight: bold;
  font-size: 0.6rem;
  max-height: 4rem;
  //justify-content: space-around;
  //align-items: center;
  //margin-right: 1.3rem;
`;

const FilterSelect = styled.select`
  display: flex;
  background-color: lightgray;
  padding: 1.5rem 2.7rem;
  border: 0;
  font-weight: bold;
  font-size: 0.6rem;
  max-height: 4rem;
  margin-left: 1.3rem;
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
  //justify-content: center;
  margin: 0 auto;
  width: 60%;
`;

const WholePage = styled.section`
  display: grid;
  margin: 0 auto;
`;

const PageLinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: flex-end;
  padding: 0;
`;

const PageLink = styled.button`
  list-style: none;
  border: 0;
  padding: 0.25rem 0.5rem;
  margin-right: 0.3rem;
  background-color: lightgray;
`;

export const Fagartikler = ({ history }) => {
  const { isAdmin, isLoggedIn } = useUserState();
  const [articles, setArticles] = useState();
  const [error, setError] = useState();
  const [pagination, setPagination] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState();
  const [categoryErr, setCategoryErr] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    let mounted = true;
    const fetchArticles = async () => {
      if (mounted) {
        const { data, err } = await list(filter, 5, currentPage);
        if (data.success === false) {
          // console.log(data);
          setError(data.success);
          // console.log('fikk feil');
        } else {
          console.log(data.data);
          setPagination(data.data.totalPages);
          setCurrentPage(data.data.currentPage);
          setArticles(data.data.data);
        }
      }
    };

    const fetchCategories = async () => {
      if (mounted) {
        const { data } = await listCategories();
        if (data.success === false) {
          setCategoryErr(data.success);
        } else {
          setCategories(data);
        }
      }
    };

    fetchArticles();
    fetchCategories();

    return function cleanup() {
      mounted = false;
      source.cancel();
    };
  }, [filter, currentPage]);

  const handlePageChange = (event) => {
    setCurrentPage(event.target.value);
  };

  const createPageLinks = () => {
    const links = [];

    for (let i = 1; i <= pagination; i++) {
      links.push(
        <PageLink key={i} value={i} onClick={handlePageChange}>
          {i}
        </PageLink>
      );
    }

    return links;
  };

  const handleCategoryFilter = (event) => {
    if(event.target.value === "Ingen filter") {
      setFilter(null);
    } else {
      setFilter(event.target.value);
    }
    console.log(filter);
  };

  return (
    <>
      <Banner title="Fagartikler" />
      <WholePage>
        <PageContainer>
          <NyArtikkelContainer>
            {isAdmin && (
              <NyArtikkelButton onClick={() => history.push('/nyartikkel')}>
                NY ARTIKKEL
              </NyArtikkelButton>
            )}
          </NyArtikkelContainer>
          <SearchAndFilterContainer>
            <SearchButton>SØK</SearchButton>
            <FilterSelect onChange={handleCategoryFilter}>
              <option key={0} value="Ingen filter">
                Ingen filter
              </option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </FilterSelect>
          </SearchAndFilterContainer>
        </PageContainer>

        <MainPage>
          {error && <h1>{error}</h1>}
          {categoryErr && <h1>{categoryErr}</h1>}
          {articles &&
            isLoggedIn &&
            articles.map((article) => (
              <Artikkel
                id={article.id}
                key={article.id}
                title={article.title}
                text={article.ingress}
                category={article.category.name}
              />
            ))}

          {articles &&
            !isLoggedIn &&
            articles.map((article) => (
              <>
                {!article.secret && (
                  <Artikkel
                    id={article.id}
                    key={article.id}
                    title={article.title}
                    text={article.ingress}
                    category={article.category.name}
                  />
                )}
              </>
            ))}
          <PageLinkContainer>{createPageLinks()}</PageLinkContainer>
        </MainPage>
      </WholePage>
    </>
  );
};

export default withRouter(Fagartikler);
