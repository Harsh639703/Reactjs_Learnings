import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const anotherelement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const another ="Vishnoi"
const reactElement =React.createElement(//React provides the create element functionality
  'a',
  {href:'https://google.com' ,target:'_blank'},
  'click me to go the google bhai',
  another
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    // anotherelement
    reactElement
   
)
