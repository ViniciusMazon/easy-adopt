import React, { useState } from 'react';

import eyeIcon from '../../assets/eye.svg';
import eyeOffIcon from '../../assets/eye-off.svg';

import { Container } from './styles';

export default function InputPassword({ label, value, setValue, ...rest }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <Container>
      <label>{label}</label>
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <img
        src={isPasswordVisible ? eyeOffIcon : eyeIcon}
        alt="eye"
        onClick={togglePasswordVisibility}
      />
    </Container>
  );
}
