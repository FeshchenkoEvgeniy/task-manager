import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAllBoards } from 'hooks';
import AddBoardButton from 'components/AddBoardButton';
import ButtonList from 'components/ButtonList/ButtonList';
import { Title } from './BoardList.styled';
import { fetchAllBoards } from 'redux/allBoards/operations';
import { fetchBackgrounds } from 'redux/background/operations';

function BoardList() {
  const allBoards = useAllBoards();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBoards());
    dispatch(fetchBackgrounds());
  }, [dispatch]);

  return (
    <>
      <Title>Мої дошки</Title>
      <AddBoardButton />
      {allBoards.length !== 0 && <ButtonList />}
    </>
  );
}

export default BoardList;
