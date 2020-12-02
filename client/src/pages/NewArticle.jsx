import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const Input = styled.input`
  border: 1px solid black;
  margin-bottom: 50px;
  height: 50px;
  border-radius: 7px;
  font-size: 16px;
`;

const Content = styled.textarea`
  border: 1px solid black;
  margin-bottom: 50px;
  height: 50px;
  border-radius: 7px;
  font-size: 16px;
`;

const Label = styled.label`
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 15px;
`;

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
`;

const NyArtikkelButton = styled.button`
  display: flex;
  background-color: #469fb9;
  padding: 1.5rem 2.7rem;
  border: 0;
  width: 140px;
  font-weight: bold;
  font-size: 1, 8rem;
  max-height: 4rem;
  align-items: center;
  margin-right: 1.3rem;
  color: white;
`;

const NyArtikkelButtonDisabled = styled.button`
  display: flex;
  background-color: #9b9b9b;
  padding: 1.5rem 2.7rem;
  opacity: 0.7;
  border: 0;
  width: 140px;
  font-weight: bold;
  font-size: 0.6rem;
  max-height: 4rem;
  align-items: center;
  margin-right: 1.3rem;
  color: white;
`;

const NewCategoryButton = styled.button`
  background-color: #469fb9;
  padding: 1rem 1rem;
  border: 0;
  height: 60px;
  width: 70px;
  font-weight: bold;
  font-size: 1rem;
  max-height: 4rem;
  color: white;
`;

const CategoryWrapper = styled.section`
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-gap: 30px;
`;

export const NewArticle = () => {
  const toDay = new Date();
  const formattedDate = `${toDay.getDate()}.${
    toDay.getMonth() + 1
  }.${toDay.getFullYear()}`;

  const [formData, setFormData] = useState({
    title: '',
    ingress: '',
    content: '',
    date: formattedDate,
    category: '',
    author: '',
  });

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  return (
    <>
      <Banner title="Ny Artikkel" />
      <InputWrapper>
        <Label htmlFor="title">Tittel </Label>
        <Input
          type="text"
          name="title"
          autoComplete="off"
          onChange={updateValue}
          value={formData.title}
        />
        <Label htmlFor="ingress">Ingress </Label>
        <Input
          type="text"
          name="ingress"
          autoComplete="off"
          onChange={updateValue}
          value={formData.ingress}
        />
        <Label htmlFor="content">Innhold </Label>
        <Content
          type="text"
          name="content"
          autoComplete="off"
          onChange={updateValue}
          value={formData.content}
        />
        <Label htmlFor="date">Dato </Label>
        <Input type="text" name="date" value={formattedDate} readOnly />
        <Label>Label for inputfelt </Label>
        <Input />
        <Label>Label for kategori </Label>
        <CategoryWrapper>
          <Input />
          <NewCategoryButton>NY</NewCategoryButton>
        </CategoryWrapper>

        <Label>Label for forfatter </Label>
        <Input />

        <NyArtikkelButton>CREATE</NyArtikkelButton>
      </InputWrapper>
    </>
  );
};

export default NewArticle;
