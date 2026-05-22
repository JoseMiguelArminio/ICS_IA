import React from 'react';

function ImagenProducto({ url, alt }) {
  return <img src={url} alt={alt} style={{ width: '100%', borderRadius: '8px' }} />;
}

export default ImagenProducto;

