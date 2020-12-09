import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Banner from '../Banner.jsx';
import styled from 'styled-components';
import { useUserState } from '../../context/UserProvider';
import { listArticleStats, listArticleStatsTotal } from '../../utils/articleService.js';
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
    height: 200px;
    
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

const LabelContainer = styled.section `
        margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 0px;
`;

const Title = styled.h2 `
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 0px;
    border-bottom: 1px solid black;
`;

const ExportButtonContainer = styled.section `
    width: 50px;
    margin-bottom: 30px;
`;

const TotalView = styled.p `
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Statistic = () => {

    const { isSuperAdmin, isLoggedIn } = useUserState();
    const [articleStats, setArticleStats] = useState();
    const [articleStatsTotal, setArticleStatsTotal] = useState();
    const [error, setError] = useState();
    const [dataSet, setDataSet] = useState([]);
  
    useEffect(() => {
        const source = axios.CancelToken.source();
        let mounted = true;
        const fetchStats = async () => {
        if (mounted) {
            const { data, err } = await listArticleStats();
            if (data.success === false) {
            // console.log(data);
            setError(data.success);
            // console.log('fikk feil');
            } else {
              setArticleStats(data.data.data);
            };
          }
        };
        fetchStats();

        const fetchStatsTotal = async () => {
          if (mounted) {
              const { data, err } = await listArticleStatsTotal();
              if (data.success === false) {
              // console.log(data);
              setError(data.success);
              // console.log('fikk feil');
              } else {
                setArticleStatsTotal(data.data);
              };
            }
          };
          fetchStatsTotal();

        return function cleanup() {
        mounted = false;
        source.cancel();
        };
    }, []);


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
          {articleStatsTotal && 
          isLoggedIn && isSuperAdmin &&
          <>
          <TotalView> Gjennomsnittlig visning for alle artikler: {(articleStatsTotal[0].avgClicks).toFixed(2)}</TotalView>
          <TotalView> Antall visninger for alle artikler: {articleStatsTotal[0].totalClicks}</TotalView>
          {dataSet.length ===0 && dataSet.push({
            Total_gjennomsnittlig_visninger: (articleStatsTotal[0].avgClicks).toFixed(2),
            Total_Visninger: articleStatsTotal[0].totalClicks,
          })}
          </>
          }
          {articleStats &&
            isLoggedIn && isSuperAdmin &&
            articleStats.map((article, index) => (
            <EmailContainer key={uniqueKey(index)}>
                <Title key={uniqueKey(index)}>{article.title}</Title>
                <Inquiry key={uniqueKey(index)}>

                   Visninger: {article.clicks}
                </Inquiry>
                <Inquiry key={uniqueKey(index)}>
                   Antall ord: {article.ingress.length + article.content.length}
                </Inquiry>
                <LabelContainer>
                    <label key={uniqueKey(index)}> Gjennomsnittelig lesetid:  {averageReadTime(index)}</label>
                </LabelContainer>
                <Inquiry key={uniqueKey(index)}>
                   Kategori: {article.category.name}
                </Inquiry>
              {dataSet.length !== articleStats.length && dataSet.push({
                  Tittel: article.title,
                  Kategori: article.category.name,
                  Visninger: article.clicks,
                  Gjennomsnittelig_lesetid: averageReadTime(index),
                  Antall_ord: article.ingress.length + article.content.length
              })}
            </EmailContainer>
              
            ))}
        </MainPage>
      </WholePage>
    </>
  );
}

export default Statistic;