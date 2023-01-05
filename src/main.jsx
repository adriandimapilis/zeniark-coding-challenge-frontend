import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MainContextProvider } from './contexts/MainContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>
)
