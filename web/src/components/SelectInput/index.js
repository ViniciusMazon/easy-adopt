import React from 'react';
import { Container } from './styles';

export default function Select({ label, options, value, setValue, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <div className="select-box">
        <select {...rest} onChange={(e) => setValue(e.target.value)}>
          <option hidden>{rest.placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
}
