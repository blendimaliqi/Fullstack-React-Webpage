import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../components/Banner';
import ModalCategory from '../components/Fagartikler/ModalCategory';
import { create } from '../utils/articleService.js';
import { getCurrentUser } from '../utils/loginService.js';
import { listCategories, createCategory } from '../utils/categoryService.js';

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
  grid-template-columns: 12fr 1fr;
  grid-gap: 30px;
  margin-bottom: 50px;
`;

const AuthorWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  height: 50px;
  margin-bottom: 50px;
`;

export const NewArticle = ({ history }) => {
  const toDay = new Date();
  const formattedDate = `${toDay.getDate()}.${
    toDay.getMonth() + 1
  }.${toDay.getFullYear()}`;
  const [adminId, setAdminId] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    ingress: '',
    content: '',
    date: formattedDate,
    category: '',
    author: '',
    administrator: adminId,
  });

  const [state, setState] = useState(false);
  const [category, setCategory] = useState();
  const [author, setAuthor] = useState();
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('category');
  const [modalCategory, setModalCategory] = useState();

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
    console.log(inputValue);
  };


  const validateInput = (title, ingress, content, category, author) => ({
    title: title.length === 0,
    ingress: ingress.length === 0,
    content: content.length === 0,
    category: category.length === 0,
    author: author.length === 0,
  });

  const isValid = () => {
    const errors = validateInput(
      formData.title,
      formData.ingress,
      formData.content,
      formData.category,
      formData.author
    );
    const isDisabled = Object.keys(errors).some((i) => errors[i]);
    return !isDisabled;
  };

  const errors = validateInput(
    formData.title,
    formData.ingress,
    formData.content,
    formData.category,
    formData.author
  );

  const isDisabled = Object.keys(errors).some((i) => errors[i]);

  const createArticle = async (inputData) => {
    const { data } = await create(inputData);
    console.log(data);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }

    console.log(formData);
    createArticle(formData);
    history.push('/fagartikler');
  };

  const showModal = (e) => {
    e.preventDefault();
    setState(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    //createCategoryFunction(modalCategory);
  //setFormData((prev) => (prev.category, <option value={categoryObject._id}>{modalCategory}</option>)  )
    const categoryObject = {
      name: modalCategory,
    };
    createCategory(categoryObject);
    setState(false);
  };

  const handleCategoryChange = (e) => {
    setModalCategory(e.target.value);
    console.log(e.target.value);
  };

  const closeModal = () => {
    setState(false);
  };



  const selectAuthor = () => {
    setAuthor(
      <select
        className={errors.author ? 'error' : ''}
        name="author"
        onChange={updateValue}
      >
        <option>Iron Man</option>
        <option>Nissefar</option>
        <option>Magnus Carlsen</option>
        <option>Justin Bieber</option>
      </select>
    );
  };
  const getAdminId = async () => {
    const { data } = await getCurrentUser();
    setAdminId(data.data._id);
    formData.administrator = data.data._id;
    console.log(data.data._id);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, err } = await listCategories();
      if (data.success === false) {
        console.log(data);
        setError(data.success);
        console.log('fikk feil');
      } else {
        setCategory(data);
      }
    };
    fetchCategories();
    selectAuthor();

    getAdminId();
  }, []);

  return (
    <>
      <Banner title="Ny Artikkel" />
      <InputWrapper onSubmit={handleSubmit}>
        <ModalCategory
          state={state}
          handleCategoryChange={handleCategoryChange}
          handleModalSubmit={handleModalSubmit}
          setModalOpen={closeModal}
        />
        <Label htmlFor="title">Tittel </Label>
        <Input
          className={errors.title ? 'error' : ''}
          type="text"
          name="title"
          autoComplete="off"
          onChange={updateValue}
          value={formData.title}
        />
        <Label htmlFor="ingress">Ingress </Label>
        <Input
          className={errors.ingress ? 'error' : ''}
          type="text"
          name="ingress"
          autoComplete="off"
          onChange={updateValue}
          value={formData.ingress}
        />
        <Label htmlFor="content">Innhold </Label>
        <Content
          className={errors.content ? 'error' : ''}
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
        <Label htmlFor="category">Label for kategori </Label>
        <CategoryWrapper>
          <select
            className={errors.category ? 'error' : ''}
            name="category"
            onChange={updateValue}
          >
            {category &&
              category.map((categoryItem) => (
                <option key={categoryItem.id} value={categoryItem.id}>{categoryItem.name}</option>
              ))}
          </select>
          <NewCategoryButton onClick={showModal}>NY</NewCategoryButton>
        </CategoryWrapper>

        <Label htmlFor="author">Label for forfatter </Label>
        <AuthorWrapper>{author}</AuthorWrapper>
        <NyArtikkelButton
          style={{
            backgroundColor: !isDisabled ? '#53a5be' : '#DBDBDB',
          }}
          disabled={isDisabled}
        >
          CREATE
        </NyArtikkelButton>
      </InputWrapper>
    </>
  );
};

export default withRouter(NewArticle);
