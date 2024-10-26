import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css'

const Error404 = () => {
  return (
    <div className="container-404">
      <h1 className='title-404'>404</h1>
      <p className='text-404'>Oops! La página que buscas no existe.</p>
      <Link to="/" className='link-404'>Volver al inicio</Link>
    </div>
  );
};


export default Error404;
