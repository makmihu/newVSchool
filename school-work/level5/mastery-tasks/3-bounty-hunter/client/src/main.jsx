import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BountyContextProvider from './bountyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BountyContextProvider>
      <App />
    </BountyContextProvider>
  </React.StrictMode>
)
