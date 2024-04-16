import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/ui/pages/App/App.tsx'
import 'src/ui/styles/reset.css'
import 'src/ui/styles/fonts.css'


ReactDOM.createRoot(document.getElementById('root')!)
.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
