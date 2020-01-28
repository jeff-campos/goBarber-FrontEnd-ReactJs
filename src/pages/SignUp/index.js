import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Informe seu nome'),
    email: Yup.string()
      .email('Insira um email válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .min(6, 'No mínimo 6 caracteres')
      .required('A senha é obrigatória'),
  });

  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          autoComplete="off"
        />
        <Input
          name="password"
          type="password"
          placeholder="Crie uma senha"
          autoComplete="off"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
