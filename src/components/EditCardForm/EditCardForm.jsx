import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

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
import { fetchEmployees } from 'redux/employees/employeeActions';

const EditCardForm = ({ taskInfo, onClose }) => {
  const { title, description, priority, deadline, _id, assignee } = taskInfo;
  const [deadlineDate, setDeadlineDate] = useState(new Date(parsedDate(deadline)));
  const [radioChoose, setRadioChoose] = useState(priority);
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees);
  const user = useSelector(state => state.auth.users);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title,
      description,
      priority,
      assignee: assignee?._id || '',
    },
    resolver: yupResolver(NewCardValidationSchema),
  });

  const onSubmit = async ({ title, description, lableColor, assignee }) => {
    if (!assignee && employees.length === 0) {
      assignee = user.id;
    }
  
    const deadline = new Intl.DateTimeFormat('en-GB').format(deadlineDate);
    const newTask = {
      title,
      description,
      priority: lableColor,
      deadline,
      assignee,
      _id,
    };
  
    console.log('Submitting updated task:', newTask);  // Debugging log
  
    dispatch(editBoardCard(newTask));
    onClose();
  };
  

  const chooseBtn = e => {
    setRadioChoose(e.target.value);
  };


  return (
    <>
      <StyledHeader>Редагувати завдання</StyledHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input placeholder="Назва" {...register('title')} />
          <p>{errors.title?.message}</p>
        </label>
        <label>
          <TextArea placeholder="Опис" {...register('description')} />
          <p>{errors.description?.message}</p>
        </label>
        <LabelColorBox>
          <LabelColorText>Колір пріорітетності виконання завдання</LabelColorText>
          <CustomRadioContainer>
            <CustomRadio
              type="radio"
              value="low"
              id="low"
              clr="lilac"
              onClick={chooseBtn}
              checked={radioChoose === 'low'}
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
              checked={radioChoose === 'medium'}
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
              checked={radioChoose === 'high'}
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
              checked={radioChoose === 'without priority'}
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
          <LabelColorText>Дедлайн</LabelColorText>
          <CustomDatePicker
            startDeadline={deadlineDate}
            setStartDeadline={setDeadlineDate}
          />
        </div>
        {employees.length === 0 ? (
          <LabelColorText>Співробітників не знайдено, Вас буде призначено виконавцем</LabelColorText>
        ) : (
          <div>
            <LabelColorText>Призначити виконавця</LabelColorText>
            <select {...register('assignee')}>
              <option value="">Вибрати працівника</option>
              {employees.map(employee => (
                <option key={employee._id} value={employee._id}>
                  {employee.firstName} {employee.lastName}
                </option>
              ))}
            </select>
            <p>{errors.assignee?.message}</p>
          </div>
        )}
        <FormBtn textBtn={() => <ChildComponent textContent="Редагувати" />} />
      </Form>
    </>
  );
};

export default EditCardForm;
