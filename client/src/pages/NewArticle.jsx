import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import ModalCategory from '../components/Fagartikler/ModalCategory';

const Input = styled.input `
    border: 1px solid black;
    margin-bottom: 50px;
    height: 50px;
    border-radius:7px;
    font-size: 16px;
`;

const Label = styled.label `
    font-weight: bolder;
    font-size: 18px;
    margin-bottom: 15px;
`;

const InputWrapper = styled.section `
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    margin-top: 100px;

`;

const NyArtikkelButton = styled.button `
    display: flex;
    background-color: #469fb9;
    padding: 1.5rem 2.7rem;
    border: 0;
    width: 140px;
    font-weight: bold;
    font-size: 1,8rem;
    max-height: 4rem;
    align-items: center;
    margin-right: 1.3rem;
    color: white;
`;

const NyArtikkelButtonDisabled = styled.button `
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

const NewCategoryButton = styled.button `
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

const CategoryWrapper = styled.section `
    display:grid;
    grid-template-columns: 12fr 1fr;
    grid-gap: 30px;
    margin-bottom: 50px;
`;

const AuthorWrapper = styled.section `
    display:grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    height: 50px;
    margin-bottom: 50px;
`;

export const NewArticle = () => {

    const [state, setState] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setState(false);
    }

    const handleCategoryChange = (e) => {
        console.log(e.target.value);
    }

    const handleSelect = (e) => {
        console.log(e.target.value)
    }

    const handleAuthor = (e) => {
        console.log(e.target.value)
    }

    const closeModal = () => {
        setState(false);
    }

    const [category, setCategory] = useState();

    const [author, setAuthor] = useState();

        const selectCategory = () => {
        setCategory((
            <select onChange={handleSelect} value={category}>
                <option>
                    Julenisse
                </option>
                <option>
                    Pepperkaker
                </option>
                <option>
                    Brun Julebrus
                </option>
                <option>
                    Pinnekjøtt
                </option>
            </select>
        ))
    };

    const selectAuthor = () => {
        setAuthor((
            <select onChange={handleAuthor} value={author}>
                <option>
                    Iron Man
                </option>
                <option>
                    Nissefar
                </option>
                <option>
                    Magnus Carlsen
                </option>
                <option>
                    Justin Bieber
                </option>
            </select>
        ))
    };
    

    useEffect(() => {
        selectCategory();
        selectAuthor();
    }, []);
    


    return (
        <>
        <Banner title={"Ny Artikkel"} />
        <InputWrapper>
            <ModalCategory state={state} handleCategoryChange={handleCategoryChange} handleSubmit={handleSubmit} setModalOpen={closeModal}/>

            <Label>Label for inputfelt </Label>
            <Input />
            <Label>Label for inputfelt </Label>
            <Input />
            <Label>Label for inputfelt </Label>
            <Input />
            <Label>Label for inputfelt </Label>
            <Input />
            <Label>Label for inputfelt </Label>
            <Input />
            <Label>Label for kategori </Label>
            <CategoryWrapper>
            {category}
            <NewCategoryButton onClick={() => setState(true)}>NY</NewCategoryButton>
            </CategoryWrapper>

            <Label>Label for forfatter </Label>
            <AuthorWrapper>
                {author}
            </AuthorWrapper>

            <NyArtikkelButton >CREATE</NyArtikkelButton>
        </InputWrapper>

        </>
    )
};

export default NewArticle;
