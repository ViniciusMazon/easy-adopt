import React from 'react';
import { Container } from './styles';

export default function Input({ label, value, setValue, ...rest }) {
  return (
    <Container>
      <label>{label}</label>

      <textarea onChange={(e) => setValue(e.target.value)} {...rest} />
    </Container>
  );
}
