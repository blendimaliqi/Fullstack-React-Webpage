import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Banner from '../Banner.jsx';

const Container = styled.article`
  margin: 0 auto;
  width: 55%;
`;

const Ingress = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`;

const SubTitleContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const SubTitleParagraph = styled.p`
    font-size: 1.3rem;
`;

const AuthorDateContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Author = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;

const Date = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;

const Category = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;

const BtnContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
`;

const DeleteBtn = styled.button`
  color: white;
  background-color: tomato;
  padding: 1.5rem 3rem;
  border: 0;
  outline: none;
  margin-right: 1rem;
`;

const EditBtn = styled.button`
  color: white;
  background-color: olive;
  padding: 1.5rem 2.5rem;
  border: 0;
  outline: none;
`;

export const ArticleDetails = () => {
  const [articles, setArticle] = useState('');

  return (
    <>
      <Banner title="Title" />
      <Container>
        <Ingress>
          <AuthorDateContainer>
            <Author>Forfatter</Author>
            <Date>02.12.2020</Date>
          </AuthorDateContainer>
          Dette er ingressen. Vi pusser opp små og mellomst ore bad for priv
          atkunder og entreprenører . Vi er opptatt a v god kv alitet og bruker
          kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å
          planlegge drømmebadet ditt fr a A til Å! Med hjer tet for faget yter
          vi kv alitet i alle ledd for at du skal være i trygge hender .
        </Ingress>
        <SubTitleContainer>
          <SubTitle>SubTitle</SubTitle>
          <SubTitleParagraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr , sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam er
            at, sed diam v oluptua. A t ver o eos et accusam et just o duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr , sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam er at, sed diam v oluptua. A t
            ver o eos et accusam et just o duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr , sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam er at, sed diam v oluptua. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr , sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam er at, sed diam v oluptua. A t
            ver o eos et accusam et just o duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr , sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam er at, sed diam v oluptua. A t ver o eos et accusam et just
            o duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr , sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam er at, sed diam v
            oluptua.
          </SubTitleParagraph>
          <SubTitle>SubTitle</SubTitle>
          <SubTitleParagraph>
            A t ver o eos et accusam et just o duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr ,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam er at, sed diam v oluptua. A t ver o eos et accusam et just
            o duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </SubTitleParagraph>
          <Category>Kategorinavn</Category>
        </SubTitleContainer>
        <BtnContainer>
          <DeleteBtn>SLETT</DeleteBtn>
          <EditBtn>REDIGER</EditBtn>
        </BtnContainer>
      </Container>
    </>
  );
};

export default ArticleDetails;
