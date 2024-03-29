import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  CustomRadio,
  CustomRadioContainer,
  Form,
  Input,
  TextArea,
  LabelColorBox,
  LabelColorText,
  StyledHeader,
} from './EditCardForm.styled';

import FormBtn from 'components/FormBtn/FormBtn';
import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import sprite from '../../assets/sprite.svg';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';
import { NewCardValidationSchema } from 'schemas';
import { parsedDate } from 'Helpers/CustomDateFormate';
import { editBoardCard } from 'redux/board/operations';

const EditCardForm = ({ taskInfo, onClose }) => {
  const { title, description, priority, deadline, _id } = taskInfo;
  const [deadlineDate, setDeadlineDate] = useState(
    new Date(parsedDate(deadline))
  );
  const [radioChoose, setRadioChoose] = useState(priority);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
      description: description,
      priority: priority,
    },
    resolver: yupResolver(NewCardValidationSchema),
  });

  const onSubmit = ({ title, description, lableColor }) => {
    const deadline = new Intl.DateTimeFormat('en-GB').format(deadlineDate);
    const newTask = description
      ? {
          title,
          description,
          priority: lableColor,
          deadline,
          _id,
        }
      : {
          title,
          priority: lableColor,
          deadline,
          _id,
        };

    dispatch(editBoardCard(newTask));
    onClose();
  };

  const chooseBtn = e => {
    setRadioChoose(e.target.value);
  };

  return (
    <>
      <StyledHeader>Edit card</StyledHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input placeholder="Title" {...register('title')} />
          <p>{errors.title?.message}</p>
        </label>
        <label>
          <TextArea placeholder="Description" {...register('description')} />
          <p>{errors.description?.message}</p>
        </label>
        <LabelColorBox>
          <LabelColorText>Label color</LabelColorText>
          <CustomRadioContainer>
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
            </label>

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
            </label>

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
            </label>

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
            </label>
          </CustomRadioContainer>
        </LabelColorBox>
        <div>
          <LabelColorText>Deadline</LabelColorText>
          <CustomDatePicker
            startDeadline={deadlineDate}
            setStartDeadline={setDeadlineDate}
          />
        </div>

        <FormBtn textBtn={() => <ChildComponent textContent="Edit" />} />
      </Form>
    </>
  );
};

export default EditCardForm;
