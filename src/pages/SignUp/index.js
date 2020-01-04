import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" autoComplete="off" />
        <input
          type="password"
          placeholder="Crie uma senha"
          autoComplete="off"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
