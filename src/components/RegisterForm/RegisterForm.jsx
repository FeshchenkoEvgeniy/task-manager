import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import AuthBtn from 'components/AuthBtn/AuthBtn';
import { registerUser } from 'redux/authentication/operations';
import { Form, Input, ShowPassword, Svg } from './RegisterForm.styled';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { RegisterFormValidationSchema } from 'schemas';
import { useIsUsersLoading } from 'hooks';
import Loader from 'components/Loader/Loader';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useIsUsersLoading();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(RegisterFormValidationSchema),
    mode: 'onChange',
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = data => {
    dispatch(registerUser(data));
    reset();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input placeholder="Enter your name" {...register('name')} />
          <p>{errors.name?.message}</p>
        </label>
        <label>
          <Input placeholder="Enter your email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </label>
        <label>
          <div>
            <Input
              type={passwordShown ? 'text' : 'password'}
              placeholder="Confirm a password"
              {...register('password')}
            />
            <ShowPassword onClick={togglePasswordVisiblity}>
              <Svg width="20px" height="20px">
                <use href={sprite + '#eye'}></use>
              </Svg>
            </ShowPassword>
          </div>
          <p>{errors.password?.message}</p>
        </label>
        <AuthBtn textBtn="Register Now" />
      </Form>
    </>
  );
};

export default RegisterForm;
