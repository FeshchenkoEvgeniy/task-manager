import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { loginUser } from 'redux/authentication/operations';
import { LoginFormValidationSchema } from 'schemas';
import { Form, Input, ShowPassword, Svg } from './LoginForm.styled';
import AuthBtn from 'components/AuthBtn/AuthBtn';
import sprite from '../../assets/sprite.svg';
import { useIsUsersLoading } from 'hooks';
import Loader from 'components/Loader/Loader';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useIsUsersLoading();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginFormValidationSchema),
    mode: 'onChange',
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = data => {
    dispatch(loginUser(data));
    reset();
  };

  return (
    <>
      {isLoading && <Loader />}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input placeholder="Введіть адресу електронної пошти" {...register('email')} />
          <p>{errors.email?.message}</p>
        </label>
        <label>
          <div>
            <Input
              type={passwordShown ? 'text' : 'password'}
              placeholder="Підтвердьте пароль"
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
        <AuthBtn textBtn="Увійти" />
      </Form>
    </>
  );
};

export default LoginForm;
