import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import sprite from '../../assets/sprite.svg';
import data from '../../assets/backgroundIcon/data';
import { addNewBoards } from 'redux/allBoards/operations';
import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import FormBtn from 'components/FormBtn/FormBtn';

import {
  NewBoardTitle,
  IconTitle,
  IconWrap,
  Icon,
  BackgroundTitle,
  BgIcon,
  BackgroundItem,
  BackgroundImage,
  Input,
  ErrorMessage,
} from './NewBoardForm.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { TitleValidationSchema } from 'schemas';

const NewBoardForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TitleValidationSchema),
    mode: 'onChange',
  });
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = event => {
    setValue('title', event.target.value.toString());
  };

  const handleIconSelect = icon => {
    setSelectedIcon(icon);
    setValue('icon', icon);
  };

  const handleBackgroundSelect = backgroundId => {
    setSelectedBackgroundId(backgroundId);
    setValue('background', backgroundId.toString());
  };

  const handleCreateBoard = data => {
    dispatch(addNewBoards(data)).then(() => {
      setValue('title', '');
      setValue('icon', '');
      setValue('background', '');
      onClose();
    });
  };

  const renderIcons = () => {
    const icons = [
      'Project',
      'star',
      'loading',
      'puzzle-piece',
      'container',
      'lightning',
      'colors',
      'hexagon',
    ];

    return icons.map(icon => (
      <Icon
        key={icon}
        selected={selectedIcon === icon}
        onClick={() => handleIconSelect(icon)}
      >
        <use href={`${sprite}#${icon}`} />
      </Icon>
    ));
  };

  const renderBackgrounds = () => {
    return data.map(item => (
      <BackgroundItem
        key={item.id}
        isActive={selectedBackgroundId === item.id}
        onClick={() => handleBackgroundSelect(item.id)}
      >
        <BackgroundImage src={item.image} alt="Background" />
      </BackgroundItem>
    ));
  };

  return (
    <div>
      <NewBoardTitle>Нова дошка</NewBoardTitle>
      <form onSubmit={handleSubmit(handleCreateBoard)}>
        {/* <label htmlFor="newBoardInput">Title</label> */}
        <Input
          id="newBoardInput"
          type="text"
          placeholder="Title"
          {...register('title')}
          onChange={handleTitleChange}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <IconTitle>Значки</IconTitle>
        <IconWrap>{renderIcons()}</IconWrap>

        <BackgroundTitle>Фон</BackgroundTitle>
        <BgIcon>{renderBackgrounds()}</BgIcon>

        <FormBtn
          textBtn={() => <ChildComponent textContent="Create" />}
          type="submit"
        />
      </form>
    </div>
  );
};

export default NewBoardForm;
