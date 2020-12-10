import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../Banner.jsx';
import { useUserState } from '../../context/UserProvider';
import {
  listArticleStats,
  listArticleStatsTotal,
} from '../../utils/articleService.js';
import { ExportToExel } from './ExportToExel.jsx';

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

const EmailContainer = styled.section`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  margin-bottom: 50px;
  height: 200px;
`;

const Inquiry = styled.p`
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 0px;
`;

const LabelContainer = styled.section`
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 0px;
`;

const Title = styled.h2`
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 0px;
  border-bottom: 1px solid black;
`;

const ExportButtonContainer = styled.section`
  width: 50px;
  margin-bottom: 30px;
`;

const TotalView = styled.p`
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
        }
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
        }
      }
    };
    fetchStatsTotal();

    return function cleanup() {
      mounted = false;
      source.cancel();
    };
  }, []);

  /**
   * Her har vi brukt formelen som blir linket til i eksamensoppgaven for å
   * avgjøre gjennomsnittlig lesetid på artikkelen. I denne funksjonen henter vi først ingress og hovedinfo med index
   * som blir passert fra map funksjonen. Deretter henter vi antall ord
   * ved å gjøre alt til en array og splitte på whitespace, slik at dette ikke kommer med. Så joiner array
   * slik at det kun er ordene som er der. Videre bruker vi formel til å regne gjsnitt og returnerer dette.
   * @param index Index i mapfunksjonen i render
   */
  const averageReadTime = (index) => {
    const ingressNoSpace = articleStats[index].ingress.split(' ').join('')
      .length;
    const contentNoSpace = articleStats[index].content.split(' ').join('')
      .length;
    const totalLengthNoSpace = ingressNoSpace + contentNoSpace;
    const totalDivided = totalLengthNoSpace / 200;
    const decimal = totalDivided - Math.floor(totalDivided);
    const seconds = Math.floor(decimal * 0.6 * 100);
    const minutes = Math.floor(totalDivided - decimal);
    // console.log(minutes + " minutes and " + seconds + " seconds");

    return `${minutes} minutter og ${seconds} sekunder`;
  };

  /**
   * En funskjon som generer en random verdi som vi bruker for å sette
   * unike key ettersom keys trenger unike nøkler for at react bedre
   * kan holde styr på dem.
   * @param index Index i mapfunksjonen i render
   */
  const uniqueKey = (index) => Math.random() * Math.PI + index;

  // Lager navnet til filen som eksporteres
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const fileName = `Statistikk_for_${month}-${year}`;

  return (
    <>
      <Banner title="Statistikk" />
      <WholePage>
        <MainPage>
          {error && <h1>{error}</h1>}
          {/** INSPIRASJON FOR EXPORT HENTET FRA : https://technicaaadda.blogspot.com/2020/11/export-data-to-excel-using-react.html
           * Denne tar imot et dataset og filnavn og bruker metoden i sin komponent ExportToExcel.jsx til å håndtere eksporteringen.
           */}
          <ExportButtonContainer>
            <ExportToExel csvData={dataSet} fileName={fileName} />
          </ExportButtonContainer>
          {articleStatsTotal && isLoggedIn && isSuperAdmin && (
            <>
              <TotalView>
                {' '}
                Gjennomsnittlig visning for alle artikler:{' '}
                {articleStatsTotal[0].avgClicks.toFixed(2)}
              </TotalView>
              <TotalView>
                {' '}
                Antall visninger for alle artikler:{' '}
                {articleStatsTotal[0].totalClicks}
              </TotalView>
              {dataSet.length === 0 &&
                dataSet.push({
                  Total_gjennomsnittlig_visninger: articleStatsTotal[0].avgClicks.toFixed(
                    2
                  ),
                  Total_Visninger: articleStatsTotal[0].totalClicks,
                })}
            </>
          )}
          {articleStats &&
            isLoggedIn &&
            isSuperAdmin &&
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
                  <label key={uniqueKey(index)}>
                    {' '}
                    Gjennomsnittelig lesetid: {averageReadTime(index)}
                  </label>
                </LabelContainer>
                <Inquiry key={uniqueKey(index)}>
                  Kategori: {article.category.name}
                </Inquiry>
                {/**
                 * Bruker map funksjonen for å hente instans av artiklene og pushe de som
                 * objekt i en array dataSet som jeg bruker som data for eksportering.
                 * Denne vil ha denne formen når den eksporteres.
                 */}
                {dataSet.length !== articleStats.length &&
                  dataSet.push({
                    Tittel: article.title,
                    Kategori: article.category.name,
                    Visninger: article.clicks,
                    Gjennomsnittelig_lesetid: averageReadTime(index),
                    Antall_ord: article.ingress.length + article.content.length,
                  })}
              </EmailContainer>
            ))}
        </MainPage>
      </WholePage>
    </>
  );
};

export default Statistic;
