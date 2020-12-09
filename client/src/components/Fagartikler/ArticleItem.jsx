import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import { downloadImage } from '../../utils/imageService';

const ArtikkelPhoto = styled.img`
  width: 200px;
  height: 200px;
  background-color: #f9f9f9;
`;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ContainerAll = styled.section`
  margin-top: 40px;
  width: 100%;
`;

const TextContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleCategoryContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = styled.h1`
  font-size: 28px;
  font-weight: bolder;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 10px;
`;

const Category = styled.p`
  margin: 0;
  font-weight: bolder;
  margin-top: 14px;
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

export const ArticleItem = ({
  id,
  title,
  text,
  category,
  history,
  imageSrc,
}) => {
  const [src, setSrc] = useState(null);

  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    const download = async () => {
      if (imageSrc) {
        const { data } = await downloadImage(imageSrc);
        const imgUrl = `${process.env.BASE_URL}/${data?.data?.imagePath}`;
        console.log(`${data?.data?.imagePath}`);
        setSrc(imgUrl);
      }
    };

    download();
  }, [imageSrc]);

  const uniqueKey = (index) => {
    return Math.random() * Math.PI + index;
};


  return (
    <>
      <ContainerAll onClick={() => history.push(`fagartikler/${id}`)}>
        <Container>
          <ArtikkelPhoto key={uniqueKey(4)} src={src} />
          <TextContentContainer>
            <TitleCategoryContainer>
              <Header key={uniqueKey(1)}> {title} </Header>
              <Category key={uniqueKey(3)}>{category}</Category>
            </TitleCategoryContainer>
            <Paragraph key={uniqueKey(2)}>{text}</Paragraph>
          </TextContentContainer>
        </Container>
      </ContainerAll>
    </>
  );
};

export default withRouter(ArticleItem);
