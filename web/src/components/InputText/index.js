import React from 'react';
import { Container } from './styles';

export default function InputText({ label, value, setValue, ...rest }) {
  return (
    <Container>
      <label>{label}</label>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
    </Container>
  );
}
