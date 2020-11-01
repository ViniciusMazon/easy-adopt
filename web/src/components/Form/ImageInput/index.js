import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';

import { Container, AddImage, Preview, RemoveIcon } from './styles';

export default function ImageInput({ name, ...rest }) {
  const inputImageRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
    }
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);

  const handleEditImage = useCallback(() => {
    setPreview(undefined);
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputImageRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container preview={preview}>
      {preview !== undefined ? (
        <Preview>
          <img src={preview} alt="Preview" />
          <button type="button" onClick={handleEditImage}>
            <RemoveIcon />
          </button>
        </Preview>
      ) : (
        <AddImage>
          <strong>Clique aqui para adicionar uma foto</strong>
          {error && <span>{error}</span>}
          <input
            type="file"
            ref={inputImageRef}
            onChange={handlePreview}
            {...rest}
          />
        </AddImage>
      )}
    </Container>
  );
}
