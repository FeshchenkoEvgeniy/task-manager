import { useEffect, useState } from 'react';

import { useAllBoards, useIsBoardsLoading } from 'hooks';
import {
  HomePageContainer,
  HomePageText,
  HomePageCreateBoardBtn,
} from './styled/HomePage.styled';
import Modal from 'components/ModalWindow/ModalWindow';
import CreateNewBoard from 'components/NewBoardForm/NewBoardForm';
import Loader from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { fetchAllBoards } from 'redux/allBoards/operations';

function HomePageComponent() {
  const [isModalOpen, setModalOpen] = useState(false);
  const isLoading = useIsBoardsLoading();
  const boards = useAllBoards();
  const dispatch = useDispatch();
  const openModal = () => {
    setModalOpen(true);
  };
  useEffect(() => {
    dispatch(fetchAllBoards());
  }, [dispatch]);

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && boards.length === 0 ? (
        <>
          <HomePageContainer>
            <HomePageText>
            Перш ніж розпочати свій проект, дуже важливо&nbsp;
              <HomePageCreateBoardBtn onClick={openModal}>
              створити дошку
              </HomePageCreateBoardBtn>
              &nbsp;для візуалізації та моніторингу всіх необхідних завдань. 
              Ця дошка діє як потужний інструмент для структурування
              робочого процесу і сприяє ефективній командній роботі серед членів команди.
            </HomePageText>
          </HomePageContainer>

          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <CreateNewBoard onClose={closeModal} />
            </Modal>
          )}
        </>
      ) : (
        <>
          <HomePageContainer>
            <HomePageText>
            Виберіть свій проект або&nbsp;
              <HomePageCreateBoardBtn onClick={openModal}>
              створіть нову дошку
              </HomePageCreateBoardBtn>
              .
            </HomePageText>
          </HomePageContainer>

          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <CreateNewBoard onClose={closeModal} />
            </Modal>
          )}
        </>
      )}
      ;
    </>
  );
}

export default HomePageComponent;
