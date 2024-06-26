import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import sprite from '../../assets/sprite.svg';
import { useUsersId, useUsersName, useUsersEmail } from 'hooks';
import FormBtn from 'components/FormBtn/FormBtn';
import { editUserProfile } from 'redux/authentication/operations';
import {
  AvatarInput,
  Button,
  DataForm,
  ErrorMessage,
  Form,
  Image,
  Input,
  Label,
  LabelAvatar,
  LabelPassword,
  Svg,
  SvgEye,
  Title,
} from './EditProfileForm.styled';
import { EditProfileValidationSchema } from 'schemas';

const EditProfileForm = ({ userAvatar, onClose }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState('password');
  const userName = useUsersName();
  const userId = useUsersId();
  const userEmail = useUsersEmail();
  const [newAvatar, setNewAvatar] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userName,
      email: userEmail,
      password: '',
    },
    resolver: yupResolver(EditProfileValidationSchema),
    mode: 'onChange',
  });

  const selectedFile = watch('avatar');

  useEffect(() => {
    if (selectedFile && selectedFile.length !== 0) {
      const reader = new FileReader();
      reader.onload = () => {
        const filePath = reader.result;
        setNewAvatar(filePath);
      };
      reader.readAsDataURL(new Blob([selectedFile[0]]));
    }
  }, [selectedFile, reset]);

  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('avatar', data.avatar[0]);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);

    const userData = { userId, formData };
    dispatch(editUserProfile(userData)).then(() => {
      onClose();
    });
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Редагувати профіль</Title>
        <DataForm>
          <Image src={newAvatar || userAvatar} alt="user-avatar" />
          <LabelAvatar>
            <AvatarInput type="file" {...register('avatar')} />
            <Svg width="10px" height="10px" stroke="black">
              <use href={sprite + '#plus'}></use>
            </Svg>
          </LabelAvatar>
          <Label>
            <Input autoComplete="off" {...register('name')} />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </Label>
          <Label>
            <Input {...register('email')} />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </Label>

          <LabelPassword>
            <Input
              type={type}
              placeholder="new password"
              autoComplete="off"
              {...register('password')}
            />

            <Button type="button" onClick={handleToggle}>
              <SvgEye width="20px" height="20px">
                <use href={sprite + '#eye'}></use>
              </SvgEye>
            </Button>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </LabelPassword>
        </DataForm>
        <FormBtn textBtn={() => 'Send'} />
      </Form>
    </>
  );
};
export default EditProfileForm;
