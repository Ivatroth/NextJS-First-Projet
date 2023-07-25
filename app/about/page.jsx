import React from 'react'

export default function AboutPage() {
  return (
    <div className='container'>
        <h1 className='titulos'>About</h1>
        <div className='row align-items-end'>
        <div className='col'>
          <h3>Español</h3>
          <p>Esta aplicación fue creada para aprender y poner en práctica los principios básicos y fundamentos de Next.js, el Framework React para la Web.
              Aprendi:
            <ul>
              <li>El app enrutador.</li>
              <li>Los componentes de React Server.</li>
              <li>Funciones de carpetas y archivos.</li>
              <li>Segmentos de ruta.</li>
              <li>Rutas anidadas.</li>
            </ul>          
          </p>
          <p>Para mas info visita la documentacion de Next.js <a href='https://nextjs.org/docs'>aqui</a> </p>
        </div>
        <div className='col'>
          <h3>English</h3>
          <p>This application was created to learn and put into practice the basic principles and fundamentals of Next.js, the React Framework for the Web.
          I learned:
          <ul>
                      <li>The app Router.</li>
                      <li>Components inside app are React Server Components.</li>
                      <li>Roles of Folders and Files.</li>
                      <li>Route Segments.</li>
                      <li>Nested Routes.</li>
                    </ul>
          </p>
          <p>For more info visit the Next.js documentation <a href='https://nextjs.org/docs'>aqui</a> </p>
        </div>
        </div>
    </div>
  )
}
