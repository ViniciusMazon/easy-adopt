import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function Select({ name, label, options, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label>{label}</label>
      <div className="select-box">
        <select ref={selectRef} defaultValue={defaultValue} {...rest}>
          <option hidden>{rest.placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {error && <span>{error}</span>}
    </Container>
  );
}
