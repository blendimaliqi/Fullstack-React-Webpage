import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

const ArtikkelPhoto = styled.section`
  width: 200px;
  height: 200px;
  background-color: #f9f9f9;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-left: 23rem;
`;

const ContainerAll = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
`;

const CategoryContainer = styled.h1`
  margin-top: 20px;
  font-size: 1em;
  margin-left: 10rem;
`;

const Header = styled.h1`
  font-size: 28px;
  font-weight: bolder;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 10px;
`;

const Paragraph = styled.p`
  margin-left: 10px;
  width: 500px;
  /* kodesnutt under for å begrense tekst i paragraf hentet fra : https://stackoverflow.com/questions/21447269/how-to-limit-the-length-of-text-in-a-paragraph/21447588
    width: 600px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    */
`;

export const ArticleItem = ({ id, title, text, history }) => {
  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  const [category, setCategory] = useState('Kategori');

  /* const select = () => {
        setCategory((
            <select onChange={handleSelect} value="Kategori">
                <option>
                    Julenisse
                </option>
                <option>
                    Julenisse2
                </option>
                <option>
                    Julenisse3
                </option>
                <option>
                    Julenisse4
                </option>
            </select>
        ))
    };
    

    useEffect(() => {
        select();
    }, []);
    */

  return (
    <>
      <ContainerAll onClick={() => history.push(`fagartikler/${id}`)}>
        <Container>
          <ArtikkelPhoto />
          <section>
            <Header> {title} </Header>
            <Paragraph>{text}</Paragraph>
          </section>
        </Container>
        <CategoryContainer>{category}</CategoryContainer>
      </ContainerAll>
    </>
  );
};

export default withRouter(ArticleItem);
