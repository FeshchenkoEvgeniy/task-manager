import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  BackgroundsList,
  BackgroundItem,
  BackgroundImage,
  BackgroundsTitle,
} from './FilterBackgrounds.styled';
import data from '../../../assets/backgroundIcon/data';
import { editBoardsBackground } from 'redux/allBoards/operations';
import { useBoardData } from 'hooks';

const FilterBackgrounds = () => {
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('');

  const dispatch = useDispatch();
  const { _id: id } = useBoardData();

  const handleBackgroundSelect = backgroundId => {
    const boardData = { id, body: { background: backgroundId } };
    setSelectedBackgroundId(backgroundId);
    dispatch(editBoardsBackground(boardData));
  };

  return (
    <>
      <BackgroundsTitle>Фон</BackgroundsTitle>
      <BackgroundsList>
        {data.map(item => (
          <BackgroundItem
            key={item.id}
            isActive={selectedBackgroundId === item.id}
            onClick={() => handleBackgroundSelect(item.id)}
          >
            <BackgroundImage src={item.image} alt="Background" />
          </BackgroundItem>
        ))}
      </BackgroundsList>
    </>
  );
};

export default FilterBackgrounds;
