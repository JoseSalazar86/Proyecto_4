import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1 className='h1__page'>Error 404</h1>
        <p>{error.message}</p>
        <p>{error.statusText}</p>
        <Link to="/">Volver a la pagina principal</Link>
    </div>
  )
}

export default NotFound