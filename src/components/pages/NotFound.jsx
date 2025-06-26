import React from 'react'

const NotFound = () => {
  return (
   <div className="d-flex vh-100 align-items-center justify-content-center bg-light">
      <div className="text-center p-4 border rounded shadow bg-white">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Página no encontrada</h2>
        <p className="mb-4 text-muted">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <a href="/" className="btn btn-primary">
          Volver al inicio
        </a>
      </div>
    </div>
  )
}

export default NotFound