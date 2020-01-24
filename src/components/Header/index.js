import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Jeff Campos</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.pngCopy to Clipboard"
              alt="Jeff Campos"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
