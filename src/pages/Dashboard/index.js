import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>01 de fevereiro</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Jeff Campos</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Livia Tenorio de Campos</span>
        </Time>
        <Time available>
          <strong>10:00</strong>
          <span>Larissa Tenorio de Campos</span>
        </Time>
        <Time available>
          <strong>10:00</strong>
          <span>Lucas Tenorio de Campos</span>
        </Time>
      </ul>
    </Container>
  );
}
