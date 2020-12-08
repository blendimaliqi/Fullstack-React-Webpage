import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Banner from '../Banner.jsx';
import styled from 'styled-components';
import { useUserState } from '../../context/UserProvider';
import { listInbox } from '../../utils/mailService.js';
import { listArticleStats } from '../../utils/articleService.js';
import { ExportToExel } from './ExportToExel.jsx';

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
    height: 110px;
    

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
 `;

const Question = styled.p `
       height: 50px;
       margin: 0;
       margin-left: 20px;
       margin-top: 10px;
       width: 600px;
      
`;

const ExportButtonContainer = styled.section `
    width: 50px;
    margin-bottom: 30px;
`;

export const Statistic = () => {

    const { isAdmin, isLoggedIn } = useUserState();
    const [articleStats, setArticleStats] = useState();
    const [error, setError] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState();
    const [dataSet, setDataSet] = useState([]);
  
    useEffect(() => {
        const source = axios.CancelToken.source();
        let mounted = true;
        const fetchStats = async () => {
        if (mounted) {
            const { data, err } = await listArticleStats(10, currentPage);
            if (data.success === false) {
            // console.log(data);
            setError(data.success);
            // console.log('fikk feil');
            } else {
            setPagination(data.data.totalPages);
            setCurrentPage(data.data.currentPage);
            setArticleStats(data.data.data);
            console.log("Data i client", data.data.data);
            }
        }
        };
        fetchStats();


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

    const averageReadTime = (index) => {
        const ingressNoSpace = articleStats[index].ingress.split(' ').join('').length;
        const contentNoSpace = articleStats[index].content.split(' ').join('').length;
        const totalLengthNoSpace = ingressNoSpace + contentNoSpace;
        const totalDivided = totalLengthNoSpace/200; 
        const decimal = totalDivided - Math.floor(totalDivided);
        const seconds = Math.floor(((decimal * 0.60) * 100));
        const minutes = Math.floor(totalDivided - decimal);
        //console.log(minutes + " minutes and " + seconds + " seconds");

        return minutes + " minutter og " + seconds + " sekunder";
    }

    const uniqueKey = (index) => {
        return Math.random() * Math.PI + index;
    };

    //Lager navnet til filen som eksporteres
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const fileName = `Statistikk_for_${month}-${year}`;


    return (
        <>
        <Banner title="Statistikk" />
        <WholePage>
        <MainPage>
          {error && <h1>{error}</h1>}
          <ExportButtonContainer>
          <ExportToExel csvData={dataSet} fileName={fileName} />
          </ExportButtonContainer>
        
          {articleStats &&
            isLoggedIn && isAdmin &&
            articleStats.map((article, index) => (
            <EmailContainer key={uniqueKey(index)}>
                <h2 key={uniqueKey(index)}>{article.title}</h2>
                <Inquiry key={uniqueKey(index)}>

                   Visninger: {article.clicks}
                </Inquiry>
                <Inquiry key={uniqueKey(index)}>
                   Antall ord: {article.ingress.length + article.content.length}
                <label key={uniqueKey(index)}> Gjennomsnittelig lesetid:  {averageReadTime(index)}</label>
                
                </Inquiry>
                {dataSet.push({
                    Tittel: article.title,
                    Kategori: article.category.name,
                    Visninger: article.clicks,
                    Gjennomsnittelig_lesetid: averageReadTime(index),
                    Ord_lengde: article.ingress.length + article.content.length,
                })}
            </EmailContainer>

            ))}
          <PageLinkContainer>{createPageLinks()}</PageLinkContainer>
        </MainPage>
      </WholePage>
    </>
  );
}

export default Statistic;