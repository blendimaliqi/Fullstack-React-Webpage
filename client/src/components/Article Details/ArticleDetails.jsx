import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useUserState } from '../../context/UserProvider.jsx';
import { get } from '../../utils/articleService.js';
import { downloadImage } from '../../utils/imageService.js';
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

const ArticleImage = styled.img`
  width: 100%;
`;

const EditBtn = styled.button`
  color: white;
  background-color: olive;
  padding: 1.5rem 2.5rem;
  border: 0;
  outline: none;
`;

export const ArticleDetails = () => {
  const [article, setArticle] = useState();
  const [error, setError] = useState();
  const { id } = useParams();
  const { isAdmin } = useUserState();
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const download = async (imageId) => {
      const { data } = await downloadImage(imageId);
      const imgUrl = `${process.env.BASE_URL}/${data?.data?.imagePath}`;
      setSrc(imgUrl);
    };

    const fetchArticle = async () => {
      const { data, err } = await get(id);
      if (data.success === false) {
        console.log(data);
        setError(data.success);
        console.log('fikk feil');
      } else {
        if (data.image) {
          download(data.image);
        }
        setArticle(data);
      }
    };
    fetchArticle();
  }, []);

  return (
    <>
      {error && <h1>{error}</h1>}
      {article && (
        <>
          <Banner title={article.title} />
          <Container>
            {article.image ? <ArticleImage src={src} /> : <ArticleImage />}
            <Ingress>
              <AuthorDateContainer>
                <Author>{article.author}</Author>
                <Date>{article.date}</Date>
              </AuthorDateContainer>
              {article.ingress}
            </Ingress>
            <SubTitleContainer>
              <SubTitleParagraph>{article.content}</SubTitleParagraph>
              <Category>{article.category.name}</Category>
            </SubTitleContainer>
            {isAdmin ? (
              <BtnContainer>
                <DeleteBtn>SLETT</DeleteBtn>
                <EditBtn>REDIGER</EditBtn>
              </BtnContainer>
            ) : (
              <BtnContainer />
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default ArticleDetails;
