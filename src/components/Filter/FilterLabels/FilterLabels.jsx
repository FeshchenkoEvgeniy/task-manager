import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import sprite from '../../../assets/sprite.svg';
import { updateFilterTasksByPriority } from 'redux/filter/slice';

import {
  CustomRadio,
  CustomRadioContainer,
  RadioItem,
  FilterModalWindow,
  LabelColors,
  Container,
  ShowAllBtn,
} from './FilterLabels.styled';

const FilterLabels = () => {
  const [radioChoose, setRadioChoose] = useState();

  const dispatch = useDispatch();
  const { register } = useForm({
    defaultValues: {
      lableColor: '',
    },
  });

  const chooseBtn = e => {
    setRadioChoose(e.target.value);
    dispatch(updateFilterTasksByPriority(e.target.value));
  };

  return (
    <FilterModalWindow>
      <Container>
        <LabelColors>Кольори пріорітетності</LabelColors>
        <ShowAllBtn
          type="button"
          onClick={() => {
            dispatch(updateFilterTasksByPriority('all'));
          }}
        >
          Показати всі
        </ShowAllBtn>
      </Container>
      <CustomRadioContainer>
        <RadioItem>
          <CustomRadio
            type="radio"
            value="without priority"
            id="withoutPriority"
            clr="gray"
            onClick={chooseBtn}
            checked={radioChoose === 'without priority' ? true : false}
            {...register('lableColor')}
          />
          <label htmlFor="withoutPriority">
            <svg width="14px" height="14px">
              <use href={sprite + '#radioButtonGray'}></use>
            </svg>
            <span>Без пріорітету</span>
          </label>
        </RadioItem>

        <RadioItem>
          <CustomRadio
            type="radio"
            value="low"
            id="low"
            clr="lilac"
            onClick={chooseBtn}
            checked={radioChoose === 'low' ? true : false}
            {...register('lableColor')}
          />
          <label htmlFor="low">
            <svg width="14px" height="14px">
              <use href={sprite + '#radioButtonLilac'}></use>
            </svg>
            <span>Низький</span>
          </label>
        </RadioItem>

        <RadioItem>
          <CustomRadio
            type="radio"
            value="medium"
            id="medium"
            clr="pink"
            onClick={chooseBtn}
            checked={radioChoose === 'medium' ? true : false}
            {...register('lableColor')}
          />
          <label htmlFor="medium">
            <svg width="14px" height="14px">
              <use href={sprite + '#radioButtonPink'}></use>
            </svg>
            <span>Середній</span>
          </label>
        </RadioItem>

        <RadioItem>
          <CustomRadio
            type="radio"
            value="high"
            id="high"
            clr="green"
            onClick={chooseBtn}
            checked={radioChoose === 'high' ? true : false}
            {...register('lableColor')}
          />
          <label htmlFor="high">
            <svg width="14px" height="14px">
              <use href={sprite + '#radioButtonGreen'}></use>
            </svg>
            <span>Високий</span>
          </label>
        </RadioItem>
      </CustomRadioContainer>
    </FilterModalWindow>
  );
};

export default FilterLabels;
