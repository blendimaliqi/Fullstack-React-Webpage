import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Banner from '../Banner.jsx';
import styled from 'styled-components'
import { useUserState } from '../../context/UserProvider';
import { listInbox } from '../../utils/mailService.js';

const PageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
`;

const SearchAndFilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 31%;
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

const EmailContainer = styled.section `
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    margin-bottom: 50px;
    

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

const Inquiry = styled.p `
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 0px;
    border-bottom: 1px solid black;
 `;

const Question = styled.p `
       height: 50px;
       margin: 0;
       margin-left: 20px;
       margin-top: 10px;
`;

export const Inbox = () => {

    const { isAdmin, isLoggedIn } = useUserState();
    const [emails, setEmails] = useState();
    const [error, setError] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState();
  
    useEffect(() => {
        const source = axios.CancelToken.source();
        let mounted = true;
        const fetchEmails = async () => {
        if (mounted) {
            const { data, err } = await listInbox(5, 1);
            if (data.success === false) {
            // console.log(data);
            setError(data.success);
            // console.log('fikk feil');
            } else {
            setPagination(data.data.totalPages);
            setCurrentPage(data.data.currentPage);
            setEmails(data.data.data);
            console.log("Data i client", data.data.data);
            }
        }
        };
        fetchEmails();


        return function cleanup() {
        mounted = false;
        source.cancel();
        };
    }, [currentPage]);

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

    return (
        <>
        <Banner title="Inbox" />
        <WholePage>
        <MainPage>
          {error && <h1>{error}</h1>}
          {emails &&
            isLoggedIn && isAdmin &&
            emails.map((article, index) => (
            <EmailContainer>
                <h2 key={article.name + index}>{article.name}</h2>
                <h4 key={article.email + index}>{'email: '+ article.email}</h4>
                <Inquiry key={index}>
                   Hendvendelse:
                </Inquiry>
                <Question key={article.question + index}>
                  {article.question}
                </Question>
            </EmailContainer>
            ))}
        </MainPage>
        <PageLinkContainer>{createPageLinks()}</PageLinkContainer>
      </WholePage>
    </>
  );
}

export default Inbox;