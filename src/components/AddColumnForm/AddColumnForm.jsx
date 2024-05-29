import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { ErrorMessage, Form, Input, Title } from './AddColumnForm.styled';
import FormBtn from 'components/FormBtn/FormBtn';
import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import { addBoardColumn } from 'redux/board/operations';
import { useBoardId } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { TitleValidationSchema } from 'schemas';

const AddColumnForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const boardId = useBoardId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(TitleValidationSchema),
    mode: 'onChange',
  });

  const onSubmit = async data => {
    const boardData = {
      board: boardId,
      ...data,
    };

    dispatch(addBoardColumn(boardData));

    reset();
    onClose();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Додати колонку</Title>
        <label>
          <Input
            autoComplete="off"
            placeholder="Назва"
            {...register('title')}
          />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </label>
        <FormBtn
          textBtn={() => <ChildComponent textContent="Додати" />}
          type="submit"
        />
      </Form>
    </>
  );
};

export default AddColumnForm;
