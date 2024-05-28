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
  ErrorMessage,
} from './AddCardForm.styled';
import FormBtn from 'components/FormBtn/FormBtn';
import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import sprite from '../../assets/sprite.svg';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';
import { NewCardValidationSchema } from 'schemas';
import { addBoardCard } from 'redux/board/operations';
import { fetchEmployees } from 'redux/employees/employeeActions';

const AddCardForm = ({ columnId, onClose }) => {
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const [radioChoose, setRadioChoose] = useState('without priority');
  const dispatch = useDispatch();
  const columns = useSelector(state => state.board.boardInfo.columns);
  const employees = useSelector(state => state.employees.employees);
  const user = useSelector(state => state.auth.users);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const tasksLength = columns.filter(column => column._id === columnId)[0]?.tasks.length || 0;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      lableColor: '',
      assignee: '',
    },
    resolver: yupResolver(NewCardValidationSchema),
  });

  const onSubmit = ({ title, description, lableColor, assignee }) => {
    if (!assignee && employees.length === 0) {
      assignee = user.id;
    }
  
    const deadline = new Intl.DateTimeFormat('en-GB').format(deadlineDate);
    const newTask = {
      title,
      description,
      priority: lableColor,
      deadline,
      column: columnId,
      index: tasksLength + 1,
      assignee,
    };
  
    console.log('Submitting new task:', newTask);  // Debugging log
  
    dispatch(addBoardCard(newTask));
    reset();
    onClose();
  };
  
  const chooseBtn = e => {
    setRadioChoose(e.target.value);
  };

  return (
    <>
      <StyledHeader>Add card</StyledHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input placeholder="Title" {...register('title')} />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </label>
        <label>
          <TextArea placeholder="Description" {...register('description')} />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
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
          <LabelColorText>Deadline</LabelColorText>
          <CustomDatePicker
            startDeadline={deadlineDate}
            setStartDeadline={setDeadlineDate}
          />
        </div>
        {employees.length === 0 ? (
          <LabelColorText>No employees found, you will be assigned as the assignee</LabelColorText>
        ) : (
          <div>
            <LabelColorText>Assign to</LabelColorText>
            <select {...register('assignee')}>
              <option value="">Select Assignee</option>
              {employees.map(employee => (
                <option key={employee._id} value={employee._id}>
                  {employee.firstName} {employee.lastName}
                </option>
              ))}
            </select>
            <ErrorMessage>{errors.assignee?.message}</ErrorMessage>
          </div>
        )}
        <FormBtn textBtn={() => <ChildComponent textContent="Add" />} />
      </Form>
    </>
  );
};

export default AddCardForm;
