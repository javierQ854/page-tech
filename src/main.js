import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="flex justify-between items-center p-6 shadow-md">
    <h1 class="text-2xl font-bold text-indigo-600">NexTech</h1>
    <nav class="space-x-4">
      <a href="#servicios" class="hover:text-indigo-600">Servicios</a>
      <a href="#clientes" class="hover:text-indigo-600">Clientes</a>
      <a href="#contacto" class="hover:text-indigo-600">Contacto</a>
    </nav>
  </header>

  <section class="text-center py-20 bg-indigo-50">
    <h2 class="text-4xl font-bold mb-4">Impulsa tu negocio con tecnología</h2>
    <p class="text-lg mb-6 text-gray-600">Creamos soluciones web modernas, escalables y rápidas.</p>
    <a href="#contacto" class="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">Contáctanos</a>
  </section>
`

setupCounter(document.querySelector('#counter'))
