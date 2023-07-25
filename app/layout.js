import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './component/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'First Proyect de Next',
  description: 'Generated by create next app',
  keywords:'next,react,app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en es">
    <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
      <link rel='stylesheet' href='https://bootswatch.com/5/flatly/bootstrap.min.css'/>
    </head>
      <body className={inter.className}>
        <Navigation />
        <div className='container p-4'>
          {children}
        </div>
        
        {/* Pie de pagina (footer) */}
        <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center"> 
          <p class="footer-texto text-center">Creemos un proyecto juntos.</p>
          <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
            <a href="https://github.com/Ivatroth" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-github enlaces"></i>
            </a>
            <a href="https://www.linkedin.com/in/ivana-frontroth" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-linkedin enlaces"></i>
            </a>
            <a href="mailto:ifrontroth@gmail.com" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-envelope enlaces"></i>
            </a>
          </div>
          <div class="derechos-de-autor enlaces">Creado por Ivana Frontroth (2023) &#169;</div>
        </footer>
      
      </body>
    </html>
  )
}