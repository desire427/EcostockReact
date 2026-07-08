import { BrowserRouter } from 'react-router-dom'
import AccueilRoutes from './components/accueil/AccueilRoutes.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AccueilRoutes />
    </BrowserRouter>
  )
}

export default App
