import './style.css'
import header from './components/header'
import hero from './components/hero'
import services from './components/services'
import testimonials from './components/testimonials'
import contact from './components/contact'
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('header').innerHTML = header()  
  document.getElementById('hero').innerHTML = hero()
  document.getElementById('services').innerHTML = services()
  document.getElementById('testimonials').innerHTML = testimonials()
  document.getElementById('contact').innerHTML = contact()
})
