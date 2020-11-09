import React from 'react';

import { Container, AddImage, Preview, RemoveIcon } from './styles';

function InputImage({ changeFile, preview, changePreview, isEditable = true }) {
  function handleRemovePreview() {
    changePreview('');
  }

  function handleAddImage(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    changeFile(file);
    const previewURL = URL.createObjectURL(file);
    changePreview(previewURL);
  }

  return (
    <Container>
      {preview ? (
        <Preview>
          <img src={preview} alt="Preview" />
          {isEditable && (
            <button type="button" onClick={handleRemovePreview}>
              <RemoveIcon />
            </button>
          )}
        </Preview>
      ) : (
        <AddImage>
          <strong>Clique aqui para adicionar uma foto</strong>
          {/* {error && <span>{error}</span>} */}
          <input type="file" onChange={handleAddImage} />
        </AddImage>
      )}
    </Container>
  );
}

export default InputImage;
