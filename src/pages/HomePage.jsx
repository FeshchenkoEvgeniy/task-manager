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
              Prior to commencing your project, it's crucial&nbsp;
              <HomePageCreateBoardBtn onClick={openModal}>
                to establish a board
              </HomePageCreateBoardBtn>
              &nbsp; for visualizing and monitoring all required tasks and
              milestones. This board acts as a potent instrument for structuring
              the workflow and promoting efficient teamwork among team members.
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
              Choose your project or&nbsp;
              <HomePageCreateBoardBtn onClick={openModal}>
                create a new board
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
