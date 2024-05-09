import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; //seen Browser Router
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  //Wrapped APp inside Browser ROuter for Router to properly work
  <React.StrictMode>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
