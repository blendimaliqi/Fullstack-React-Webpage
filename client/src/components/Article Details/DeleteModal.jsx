import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('body');

const ModalContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
`;

const ConfirmButton = styled.button`
  display: flex;
  background-color: #469fb9;
  padding: 1.5rem 2.7rem;
  border: 0;
  width: 8rem;
  font-weight: bold;
  font-size: 1em;
  max-height: 2rem;
  align-items: center;
  margin-right: 1.3rem;
  color: white;
  outline: none;

  &:active {
    background-color: lightgray;
    color: black;
  }
`;

const CancelButton = styled.button`
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
  color: white;
  outline: none;

  &:active {
    background-color: lightgray;
    color: black;
  }
`;

const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const ModalMessage = styled.p`
  margin: 1rem 0;
`;

export const DeleteModal = ({
  state,
  close,
  handleModalSubmit,
  setModalOpen,
  name,
}) =>
  state ? (
    <Modal
      className="modal"
      isOpen={state}
      onRequestClose={setModalOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(52, 52, 52, 0.5)',
          width: '100%',
        },
        content: {
          display: 'flex',
          backgroundColor: '#fefefe',
          justifyContent: 'center',
          flexDirection: 'column',
          alignSelf: 'center',
          alignItems: 'center',
          width: '30%',
          height: '10rem',
          margin: '0 auto ',
          marginTop: '38vh',
          outline: 'none',
        },
      }}
    >
      <ModalContentContainer>
        <ModalMessage>Sikker på at du vil seltte: {name}</ModalMessage>
        <ButtonContainer>
          <ConfirmButton onClick={handleModalSubmit}>Bekreft</ConfirmButton>
          <CancelButton onClick={setModalOpen}>Avbryt</CancelButton>
        </ButtonContainer>
      </ModalContentContainer>
    </Modal>
  ) : null;
export default DeleteModal;
