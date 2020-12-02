import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('body');

const Input = styled.input `
    border: 1px solid black;
    margin-bottom: 50px;
    height: 50px;
    width: 100%;
    border-radius:7px;
    font-size: 16px;
    border-radius: 7;
`;

const Wrapper = styled.section `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 80%;
`;

const NewCategoryLabel = styled.label `
    display:flex;
    align-self: flex-start;
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 5px;

`;

const NewCategoryButtonm = styled.button `
    display: flex;
    flex-direction: flex-end;
    background-color: #469fb9;
    padding: 1.5rem 2.7rem;
    border: 0;
    width: 130px;
    font-weight: bold;
    font-size: 1em;
    max-height: 2rem;
    align-items: center;
    margin-right: 1.3rem;
    color: white;
`;


export const ModalCategory = ({ state, close, handleCategoryChange, handleSubmit, setModalOpen }) => {
    return (
        state ? (<Modal
            className="modal"
            isOpen={state}
            onRequestClose={setModalOpen}
            style={
                {
                    overlay: {
                        backgroundColor: 'rgba(52, 52, 52, 0.5)',
                        width: '100%'
                    },
                    content: {
                        display: 'flex',
                        backgroundColor: '#fefefe',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: '40%',
                        height: '250px',
                        margin: '0 auto ',
                        marginTop: '25vh',
                        outline: 'none',
                    },
                }
            }
        >
        
        <Wrapper>
        <NewCategoryLabel>Ny Kategori</NewCategoryLabel>
            <Input placeholder={"Placeholder for input felt"} onChange={handleCategoryChange}/>
            <NewCategoryButtonm onClick={handleSubmit}>Create</NewCategoryButtonm>
        </Wrapper>
        </Modal>
        ) : null
    )
};

export default ModalCategory;