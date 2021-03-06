import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../Banner.jsx';
import { useUserState } from '../../context/UserProvider';
import { listInbox } from '../../utils/mailService.js';

const MainPage = styled.section`
  display: grid;
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

const EmailContainer = styled.section`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  margin-bottom: 50px;

  //De to linjene under er hentet fra https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
  overflow: scroll;
  white-space: nowrap;

  & h2 {
    margin-bottom: 0px;
    margin-top: 0px;
    margin-left: 20px;
  }

  & h4 {
    margin-left: 20px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 0px;
  }
`;

const Inquiry = styled.p`
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 0px;
  border-bottom: 1px solid black;
`;

const Question = styled.p`
  height: 50px;
  margin: 0;
  margin-left: 20px;
  margin-top: 10px;
  width: 600px;
`;

export const Inbox = () => {
  /** BASERT PÅ FORELESERS EKSEMPLER */
  const { isAdmin, isLoggedIn, isSuperAdmin } = useUserState();
  const [emails, setEmails] = useState();
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    /** Linje 84-85, linje 87, 104-105: Lånt fra //Lånt fra: https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm */
    const source = axios.CancelToken.source();
    let mounted = true;
    const fetchEmails = async () => {
      if (mounted) { // 87
        const { data, err } = await listInbox(5, currentPage);
        if (data.success === false) {
          // console.log(data);
          setError(data.success);
          // console.log('fikk feil');
        } else {
          setPagination(data.data.totalPages);
          setCurrentPage(data.data.currentPage);
          setEmails(data.data.data);
          console.log('Data i client', data.data.data);
        }
      }
    };
    fetchEmails();

    return function cleanup() {
      mounted = false; // 104
      source.cancel(); // 105
    };
  }, [currentPage]);

  const handlePageChange = (event) => {
    setCurrentPage(event.target.value);
  };

  /** INSPIRASJON FRA https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778
   * Iterer over lengden på antall sider i pagineringen og lager like mange pagelinks
   */
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

  return (
    <>
      <Banner title="Inbox" />
      <WholePage>
        <MainPage>
          {error && <h1>{error}</h1>}
          {emails &&
            (isAdmin || isSuperAdmin) &&
            emails.map((article, index) => (
              <EmailContainer>
                <h2 key={article.name + index}>{article.name}</h2>
                <h4 key={article.email + index}>{`email: ${article.email}`}</h4>
                <Inquiry key={index}>Hendvendelse:</Inquiry>
                <Question key={article.question + index}>
                  {article.question}
                </Question>
              </EmailContainer>
            ))}
          <PageLinkContainer>{createPageLinks()}</PageLinkContainer>
        </MainPage>
      </WholePage>
    </>
  );
};

export default Inbox;
