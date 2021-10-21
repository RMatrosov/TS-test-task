import React from 'react';
import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../blocks/LogInStyles.css'

const LogIn = ({handleAuthorize}) => {

  const schema = yup.object().shape({
    Email: yup.string()
        .email("адрес электронной почты должен содержать символ @")
        .required("Введите адрес электронной почты"),
    password: yup.string()
        .min(8, "пароль должен содержать от 8 до 32 символов")
        .max(32, "пароль должен содержать от 8 до 32 символов")
        .required("обязательное поле")
  });

  const {register, formState: {errors}, handleSubmit} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('test123456');

  function onSubmit() {
    handleAuthorize(email, password)
  }

  return (
      <div className='log__in'>
        <form onSubmit={handleSubmit(onSubmit)} className='log__in_wrapper' noValidate>
          <h4 className='log__in_title'>Вход</h4>
          <input type="email" className="log__in_input"
                 placeholder='Email'
                 {...register("Email", {required: true})}
                 onChange={(e) => setEmail(e.target.value)}
                 value={email || ''}
          />
          <p className='log__in_error'>{errors.Email?.message}</p>
          <input type="password" className="log__in_input"
                 placeholder='Пароль'
                 value={password || ''}
                 {...register("password", {required: true})}
                 onChange={(e) => setPassword(e.target.value)}
          />
          <p className='log__in_error'>{errors.password?.message}</p>
          <button type='submit' className='log__in_button'>Войти</button>
        </form>
      </div>
  );
};

export default LogIn;
