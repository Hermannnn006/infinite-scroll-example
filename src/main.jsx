import { StrictMode } from 'react'
import App from './App.jsx'
import '@/assets/css/index.css'
import * as ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
