import { hello } from './constants'
import '../assets/sass/style.sass'

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('app')
    if (!rootElement) return
    
    const helloElement = document.createElement('h1')
    helloElement.textContent = hello
    rootElement.appendChild(helloElement)
})
