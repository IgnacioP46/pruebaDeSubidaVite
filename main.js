import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
//import {person, sayHello} from "./modules";//importacion normal 1
//import DEV_LAN, {person, sayHello} from "./modules";//inportacion export default sin destructuring 2
//import mainLanguage, {person, sayHello} from "./modules";//renombrado de de constantes 3
import DEV_LAN, {person as personObject, sayHello} from "./modules";//import normal con renombrado 4

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

//1
console.log(person);
sayHello();

//2
console.log(DEV_LAN)

//3
console.log(mainLanguage)

//4
console.log(personObject);